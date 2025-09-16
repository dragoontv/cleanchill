import React, { useMemo } from 'react';
import { useCart } from '@/components/CartContext/CartContext';

// Small reusable button for quantity
const QuantityButton = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-lg font-bold hover:bg-gray-300 transition-colors"
    >
        {children}
    </button>
);

// Small reusable remove button
const RemoveButton = ({ onClick, title }) => (
    <button
        onClick={onClick}
        className="text-gray-400 hover:text-red-500 transition-colors"
        aria-label={`Remove ${title}`}
    >
        ✕
    </button>
);

// Single cart item
const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    // Determine image source
    const imageURL = item.image
        ? typeof item.image === "string"
            ? item.image
            : URL.createObjectURL(item.image) // handle File objects
        : `https://placehold.co/64x64/E5E7EB/6B7280?text=${encodeURIComponent(item.title)}`;

    return (
        <li className="flex items-center space-x-4 border-b pb-4">
            <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                    src={imageURL}
                    alt={item.title || "Item"}
                    className="object-cover w-full h-full"
                    onError={(e) => (e.target.src = `https://placehold.co/64x64/E5E7EB/6B7280?text=Image+Error`)}
                />
            </div>
            <div className='relative flex-grow'>
                <p className="text-sm font-semibold text-gray-800 truncate">{item.title}</p>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-blue-600 font-bold mt-1">Rp {item.price}</p>
                    <div className="flex items-center space-x-2">
                        <QuantityButton onClick={() => onDecrease(item)}>-</QuantityButton>
                        <span className="text-base font-medium">{item.quantity}</span>
                        <QuantityButton onClick={() => onIncrease(item)}>+</QuantityButton>
                    </div>
                </div>
            </div>
            <RemoveButton onClick={() => onRemove(item)} title={item.title} />
        </li>
    );
};

// Main cart summary
const CartSummary = () => {
    const { cartItems = [], addToCart, decreaseFromCart, removeFromCart } = useCart() || {};
    const hasItems = cartItems.length > 0;

    // Calculate total price
    const total = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cartItems]
    );

    // Handlers
    const handleIncrease = (item) => addToCart(item);
    const handleDecrease = (item) => decreaseFromCart(item.id);
    const handleRemove = (item) => removeFromCart(item.id);

    return (
        <div className="flex flex-col h-full bg-white rounded-lg shadow-lg p-6 space-y-4">
            {hasItems ? (
                <>
                    <ul className="space-y-4 flex-grow overflow-y-auto">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                                onRemove={handleRemove}
                            />
                        ))}
                    </ul>
                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                            <span>Total:</span>
                            <span>Rp {total}</span>
                        </div>
                        <button className="mt-4 w-full rounded-full bg-blue-600 py-3 text-white font-bold text-lg hover:bg-blue-700 transition-colors">
                            Checkout
                        </button>
                    </div>
                </>
            ) : (
                <div className="flex-grow flex items-center justify-center text-center text-gray-500">
                    Your cart is empty.
                </div>
            )}
        </div>
    );
};

export default CartSummary;
