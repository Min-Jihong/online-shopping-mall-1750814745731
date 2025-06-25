'use client';

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAtomValue } from "jotai";
import { cartItemsAtom } from "@/lib/atoms";

export function Header() {
  const cartItems = useAtomValue(cartItemsAtom);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        온라인 쇼핑몰
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/cart">
          <Button variant="ghost" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {totalItemsInCart > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
            <span className="sr-only">장바구니</span>
          </Button>
        </Link>
      </nav>
    </header>
  );
}
