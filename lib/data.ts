import { Product } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod1",
    name: "프리미엄 커피 원두 500g",
    price: 25000,
    description: "엄선된 최고급 아라비카 원두로 블렌딩하여 깊고 풍부한 향미를 자랑합니다. 신선한 로스팅으로 최상의 맛을 선사합니다.",
    imageUrl: "/images/coffee_beans.jpg",
    stock: 100,
  },
  {
    id: "prod2",
    name: "스마트 워치 X1",
    price: 150000,
    description: "심박수 측정, GPS, 수면 분석 등 다양한 기능을 갖춘 최신 스마트 워치입니다. 세련된 디자인과 뛰어난 성능을 경험해보세요.",
    imageUrl: "/images/smart_watch.jpg",
    stock: 50,
  },
  {
    id: "prod3",
    name: "무선 블루투스 이어폰",
    price: 75000,
    description: "고음질 사운드와 편안한 착용감을 제공하는 무선 이어폰입니다. 최대 8시간 재생 가능하며, 휴대용 충전 케이스가 포함되어 있습니다.",
    imageUrl: "/images/wireless_earbuds.jpg",
    stock: 200,
  },
  {
    id: "prod4",
    name: "친환경 대나무 칫솔 세트",
    price: 12000,
    description: "100% 생분해성 대나무로 만들어진 친환경 칫솔입니다. 부드러운 칫솔모가 잇몸을 보호하며 깨끗한 구강 관리를 돕습니다.",
    imageUrl: "/images/bamboo_toothbrush.jpg",
    stock: 300,
  },
  {
    id: "prod5",
    name: "고성능 게이밍 마우스",
    price: 55000,
    description: "정확한 트래킹과 빠른 반응 속도를 자랑하는 게이밍 마우스입니다. 커스터마이징 가능한 RGB 조명으로 게이밍 환경을 더욱 멋지게 꾸며보세요.",
    imageUrl: "/images/gaming_mouse.jpg",
    stock: 70,
  },
];
