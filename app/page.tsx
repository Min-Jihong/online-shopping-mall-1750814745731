'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "상품 목록",
      path: "/",
      icon: Home,
      description: "다양한 상품들을 한눈에 볼 수 있는 메인 페이지입니다.",
    },
    {
      name: "장바구니",
      path: "/cart",
      icon: ShoppingCart,
      description: "장바구니에 담긴 상품들을 확인하고 수량을 조절하거나 삭제할 수 있는 페이지입니다.",
    },
    {
      name: "결제",
      path: "/checkout",
      icon: CreditCard,
      description: "주문 정보를 확인하고 결제를 진행하는 페이지입니다.",
    },
  ];

  return (
    <>
      <div className="hidden md:flex flex-col h-screen w-64 border-r bg-gray-100 p-4">
        <div className="flex items-center justify-center h-16 border-b">
          <span className="text-lg font-semibold">메뉴</span>
        </div>
        <nav className="flex-1 mt-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-200",
                pathname === item.path && "bg-gray-200 font-medium"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <Sheet>
        <SheetTrigger asChild className="md:hidden fixed top-4 left-4 z-50">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <div className="flex items-center justify-center h-16 border-b">
            <span className="text-lg font-semibold">메뉴</span>
          </div>
          <nav className="grid gap-2 text-lg font-medium mt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                  pathname === item.path && "bg-muted text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
