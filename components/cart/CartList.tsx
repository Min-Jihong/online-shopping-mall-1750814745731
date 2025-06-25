'use client';

import { CartItem as CartItemType } from "@/types";
import { CartItem } from "@/components/cart/CartItem";
import { Card } from "@/components/ui/card";

interface CartListProps {
  cartItems: CartItemType[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export function CartList({ cartItems, onUpdateQuantity, onRemoveItem }: CartListProps) {
  return (
    <Card className="p-4">
      <h2 className="text-2xl font-semibold mb-4">장바구니 상품</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </Card>
  );
}
