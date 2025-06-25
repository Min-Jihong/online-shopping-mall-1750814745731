import type { Metadata } from "next";
import "../app/globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { Sidebar } from "@/components/common/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from 'jotai';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "온라인 쇼핑몰",
  description: "사용자가 상품을 검색하고, 장바구니에 담아 결제할 수 있는 온라인 쇼핑몰입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex",
          fontSans.variable
        )}
      >
        <Provider>
          <Sidebar />
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
