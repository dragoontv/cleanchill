// src/components/CartBubble/CartBubble.jsx

"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext/CartContext";
import CartSummary from "@/components/CartSummary/CartSummary";

export default function CartBubble() {
  const { cartItems = [] } = useCart() || {};
  const [isOpen, setIsOpen] = useState(false);

  // Calculate the total quantity of all items
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg transition duration-300 hover:bg-sky-600 hover:-translate-y-1 hover:scale-105"
      >
        <ShoppingCart className="h-6 w-6" />
        {/* Change cartItems.length to totalQuantity */}
        {totalQuantity > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            {totalQuantity}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      <div
        className={`fixed bottom-0 right-0 h-full w-80 transform bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}