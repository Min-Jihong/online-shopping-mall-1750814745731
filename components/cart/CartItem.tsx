'use client';

import { CartItem as CartItemType } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) {
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    onUpdateQuantity(item.id, isNaN(value) ? 0 : value);
  };

  const incrementQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    onUpdateQuantity(item.id, Math.max(1, item.quantity - 1));
  };

  return (
    <Card className="flex items-center p-4 shadow-sm">
      <div className="relative w-24 h-24 mr-4 flex-shrink-0">
        <Image
          src={`/images/${item.productId}.jpg`}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <div className="col-span-1">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600">{item.price.toLocaleString()}원</p>
        </div>
        <div className="flex items-center space-x-2 col-span-1 justify-center">
          <Button variant="outline" size="icon" onClick={decrementQuantity}>
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center"
            min="1"
          />
          <Button variant="outline" size="icon" onClick={incrementQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-right col-span-1 flex items-center justify-end space-x-2">
          <span className="font-bold text-lg">
            {(item.price * item.quantity).toLocaleString()}원
          </span>
          <Button variant="ghost" size="icon" onClick={() => onRemoveItem(item.id)}>
            <X className="h-5 w-5 text-red-500" />
            <span className="sr-only">삭제</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
