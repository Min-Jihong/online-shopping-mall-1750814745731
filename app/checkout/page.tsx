'use client';

import { CartList } from "@/components/cart/CartList";
import { CartSummary } from "@/components/cart/CartSummary";
import { useAtom, useSetAtom, useAtomValue } from "jotai";
import { cartItemsAtom, updateCartItemQuantityAtom, removeCartItemAtom, cartTotalAmountAtom } from "@/lib/atoms";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export default function CartPage() {
  const [cartItems] = useAtom(cartItemsAtom);
  const updateQuantity = useSetAtom(updateCartItemQuantityAtom);
  const removeItem = useSetAtom(removeCartItemAtom);
  const totalAmount = useAtomValue(cartTotalAmountAtom);
  const router = useRouter();

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      toast.error("수량은 1개 이상이어야 합니다.");
      return;
    }
    updateQuantity(itemId, quantity);
    toast.info("장바구니 상품 수량이 변경되었습니다.");
  };

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
    toast.success("장바구니에서 상품이 삭제되었습니다.");
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("장바구니에 상품이 없습니다. 상품을 추가해주세요.");
      return;
    }
    router.push("/checkout");
  };

  return (
    <> {/* RootLayout의 main 태그가 이미 레이아웃을 제공하므로 중복되는 div, Header, Footer를 제거합니다. */}
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10">
          장바구니가 비어 있습니다.
          <br />
          <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            상품 보러 가기
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartList
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          </div>
          <div className="lg:col-span-1">
            <CartSummary totalAmount={totalAmount} onCheckout={handleCheckout} />
          </div>
        </div>
      )}
    </>
  );
}
