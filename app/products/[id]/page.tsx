'use client';

import { ProductList } from "@/components/product/ProductList";
import { MOCK_PRODUCTS } from "@/lib/data";

export default function HomePage() {
  return (
    <> {/* RootLayout의 main 태그가 이미 레이아웃을 제공하므로 중복되는 div, Header, Footer를 제거합니다. */}
      <h1 className="text-3xl font-bold mb-6">상품 목록</h1>
      <ProductList products={MOCK_PRODUCTS} />
    </>
  );
}
