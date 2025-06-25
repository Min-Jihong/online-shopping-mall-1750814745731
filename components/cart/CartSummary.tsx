'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartSummaryProps {
  totalAmount: number;
  onCheckout: () => void;
}

export function CartSummary({ totalAmount, onCheckout }: CartSummaryProps) {
  return (
    <Card className="p-4 sticky top-4">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-semibold">주문 요약</CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-2">
        <div className="flex justify-between text-lg">
          <span>상품 금액</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>배송비</span>
          <span>0원</span>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between text-xl font-bold">
          <span>총 결제 금액</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </div>
      </CardContent>
      <CardFooter className="px-0 pt-4">
        <Button onClick={onCheckout} className="w-full py-3 text-lg">
          주문하기
        </Button>
      </CardFooter>
    </Card>
  );
}
