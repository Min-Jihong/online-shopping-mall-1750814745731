'use client';

import { Product } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto p-6 shadow-lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-80 md:h-full bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div>
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-4xl font-extrabold mb-2">{product.name}</CardTitle>
            <CardDescription className="text-lg text-gray-700 leading-relaxed">
              {product.description}
            </CardDescription>
          </CardHeader>
          <Separator className="my-4" />
          <CardContent className="px-0">
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold text-blue-700">
                {product.price.toLocaleString()}원
              </span>
              <span className="ml-2 text-lg text-gray-500">VAT 포함</span>
            </div>
            <div className="text-md text-gray-600">
              <p className="mb-2">재고: <span className="font-semibold">{product.stock}개</span></p>
              <p>배송: <span className="font-semibold">무료 배송</span></p>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
