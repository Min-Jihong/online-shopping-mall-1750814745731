'use client';

import { ProductDetail } from "@/components/product/ProductDetail";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { MOCK_PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { useSetAtom } from "jotai";
import { addToCartAtom } from "@/lib/atoms";
import { toast } from "sonner";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = MOCK_PRODUCTS.find((p) => p.id === params.id);
  const addItemToCart = useSetAtom(addToCartAtom);

  if (!product) {
    notFound();
  }

  const handleAddToCart = (productId: string, quantity: number) => {
    if (product) {
      addItemToCart(product, quantity);
      toast.success(`${product.name} ${quantity}개가 장바구니에 추가되었습니다.`);
    }
  };

  return (
    <> {/* RootLayout의 main 태그가 이미 레이아웃을 제공하므로 중복되는 div, Header, Footer를 제거합니다. */}
      <ProductDetail product={product} />
      <div className="mt-8 flex justify-center">
        <AddToCartButton productId={product.id} onAddToCart={handleAddToCart} />
      </div>
    </>
  );
}
