'use client';

import { Control } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// Define formSchema here for type safety, or import if it's in a shared file
const formSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요."),
  address: z.string().min(5, "주소를 입력해주세요."),
  phone: z.string().regex(/^\d{2,3}-\d{3,4}-\d{4}$/, "유효한 전화번호 형식이 아닙니다. (예: 010-1234-5678)"),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
});

interface CheckoutFormProps {
  control: Control<z.infer<typeof formSchema>>; // Accept control prop from parent form
}

export function CheckoutForm({ control }: CheckoutFormProps) {
  return (
    <Card className="p-4">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-semibold">배송지 정보</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        {/* Remove <Form> and <form> tags as the parent (CheckoutPage) now manages the form */}
        <div className="space-y-4"> {/* Keep the spacing for form fields */}
          <FormField
            control={control} // Use the control passed from the parent form
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>주소</Label>
                <FormControl>
                  <Input placeholder="서울특별시 강남구 테헤란로 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>전화번호</FormLabel>
                <FormControl>
                  <Input placeholder="010-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
