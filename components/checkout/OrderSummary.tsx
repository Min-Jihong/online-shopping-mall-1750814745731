'use client';

import { CartItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface OrderSummaryProps {
  cartItems: CartItem[];
  totalAmount: number;
}

export function OrderSummary({ cartItems, totalAmount }: OrderSummaryProps) {
  return (
    <Card className="p-4 sticky top-4">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-semibold">주문 상품</CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={`/images/${item.productId}.jpg`}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price.toLocaleString()}원 x {item.quantity}</p>
            </div>
            <span className="font-semibold">{(item.price * item.quantity).toLocaleString()}원</span>
          </div>
        ))}
        <Separator className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>총 결제 금액</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </div>
      </CardContent>
    </Card>
  );
}
