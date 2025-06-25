'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface PaymentMethodSelectionProps {
  onSelectMethod: (method: string) => void;
}

export function PaymentMethodSelection({ onSelectMethod }: PaymentMethodSelectionProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("credit_card");

  const handleValueChange = (value: string) => {
    setSelectedMethod(value);
    onSelectMethod(value);
  };

  return (
    <Card className="p-4">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-semibold">결제 수단</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <RadioGroup defaultValue="credit_card" value={selectedMethod} onValueChange={handleValueChange} className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit_card" id="credit_card" />
            <Label htmlFor="credit_card" className="text-base">신용카드</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank_transfer" id="bank_transfer" />
            <Label htmlFor="bank_transfer" className="text-base">계좌 이체</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="kakao_pay" id="kakao_pay" />
            <Label htmlFor="kakao_pay" className="text-base">카카오페이</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="naver_pay" id="naver_pay" />
            <Label htmlFor="naver_pay" className="text-base">네이버페이</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
