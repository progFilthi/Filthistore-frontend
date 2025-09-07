"use client";

import { useCart } from "@/lib/cart-store";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen space-y-8 items-center justify-center">
        <p className="text-muted-foreground">Your cart is empty.</p>
        <Link href={"/"}>
          <Button>Continue shopping ...</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex gap-8 justify-between">
        <h1 className="text-3xl font-bold">Cart</h1>
        <Link href={"/"}>
          <Button>Continue shopping</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <Card
            key={`${item.id}-${item.license}`}
            className="rounded-2xl shadow-sm"
          >
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    License: {item.license}
                  </p>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
}
