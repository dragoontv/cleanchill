"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/Card";
import { Button } from "@/components/UI/Button";

import { useCart } from "@/components/CartContext/CartContext";

export default function CardComponent({ id, title, description, price, image }) {
  const { addToCart } = useCart();
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center text-center">
        <div className="w-full h-40 relative mb-3">
          <Image
            fill
            src={image}
            alt={title}
            className="object-cover rounded-lg"
          />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold text-blue-600 mb-4">Rp {price}</p>
        <Button className="w-full"
          onClick={() => addToCart({ id, title, price, image})}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}
