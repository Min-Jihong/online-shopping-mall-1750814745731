'use client';

import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { PaymentMethodSelection } from "@/components/checkout/PaymentMethodSelection";
import { useAtomValue, useSetAtom } from "jotai";
import { cartItemsAtom, cartTotalAmountAtom, clearCartAtom } from "@/lib/atoms";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";

// Define form schema here, as CheckoutPage will manage the form state
const formSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요."),
  address: z.string().min(5, "주소를 입력해주세요."),
  phone: z.string().regex(/^\d{2,3}-\d{3,4}-\d{4}$/, "유효한 전화번호 형식이 아닙니다. (예: 010-1234-5678)"),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
});

export default function CheckoutPage() {
  const cartItems = useAtomValue(cartItemsAtom);
  const totalAmount = useAtomValue(cartTotalAmountAtom);
  const clearCart = useSetAtom(clearCartAtom);
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  // Initialize react-hook-form here
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
    },
  });

  const handleCheckoutSubmit = (formData: z.infer<typeof formSchema>) => {
    if (cartItems.length === 0) {
      toast.error("장바구니에 상품이 없습니다. 결제를 진행할 수 없습니다.");
      router.push("/");
      return;
    }
    if (!selectedPaymentMethod) {
      toast.error("결제 수단을 선택해주세요.");
      return;
    }

    console.log("주문 정보:", {
      shippingInfo: formData, // Now formData is correctly passed from the form submission
      items: cartItems,
      totalAmount: totalAmount,
      paymentMethod: selectedPaymentMethod,
    });

    toast.success("주문이 성공적으로 완료되었습니다!");
    clearCart();
    router.push("/");
  };

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <> {/* RootLayout의 main 태그가 이미 레이아웃을 제공하므로 중복되는 div, Header, Footer를 제거합니다. */}
      <h1 className="text-3xl font-bold mb-6">결제</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10">
          결제할 상품이 없습니다.
          <br />
          <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            상품 보러 가기
          </Link>
        </div>
      ) : (
        <Form {...form}> {/* Wrap the entire checkout section with Form component */}
          <form onSubmit={form.handleSubmit(handleCheckoutSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8"> {/* Use form.handleSubmit for the main form submission */}
            <div className="lg:col-span-2 space-y-8">
              <CheckoutForm control={form.control} /> {/* Pass form.control to CheckoutForm */}
              <PaymentMethodSelection onSelectMethod={handlePaymentMethodSelect} />
            </div>
            <div className="lg:col-span-1">
              <OrderSummary cartItems={cartItems} totalAmount={totalAmount} />
              <Button
                type="submit" // Make this button submit the form
                className="w-full mt-6 py-3 text-lg"
                disabled={!selectedPaymentMethod || cartItems.length === 0}
              >
                {totalAmount.toLocaleString()}원 결제하기
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
