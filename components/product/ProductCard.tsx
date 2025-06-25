'use client';

import Link from "next/link";
import { Product } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </Link>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold truncate">
          <Link href={`/products/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {product.description.substring(0, 50)}...
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-xl font-bold text-blue-700">
          {product.price.toLocaleString()}원
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button className="w-full">상세 보기</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
