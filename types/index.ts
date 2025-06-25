export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  status: string;
  orderDate: string;
  items: CartItem[];
}
