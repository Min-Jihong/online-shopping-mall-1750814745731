'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus } from "lucide-react";

interface AddToCartButtonProps {
  productId: string;
  onAddToCart: (productId: string, quantity: number) => void;
}

export function AddToCartButton({ productId, onAddToCart }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (event.target.value === "") {
      setQuantity(0);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddClick = () => {
    if (quantity >= 1) {
      onAddToCart(productId, quantity);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center border rounded-md">
        <Button variant="outline" size="icon" onClick={decrementQuantity} className="rounded-r-none">
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-20 text-center border-y-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
          min="1"
        />
        <Button variant="outline" size="icon" onClick={incrementQuantity} className="rounded-l-none">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button onClick={handleAddClick} className="px-6 py-3 text-lg">
        장바구니에 추가
      </Button>
    </div>
  );
}
