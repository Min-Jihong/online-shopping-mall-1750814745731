'use client';

import { atom } from 'jotai';
import { CartItem } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const cartItemsAtom = atom<CartItem[]>([]);

export const addToCartAtom = atom(
  null,
  (get, set, product: { id: string; name: string; price: number }, quantity: number) => {
    const currentCart = get(cartItemsAtom);
    const existingItem = currentCart.find(item => item.productId === product.id);

    if (existingItem) {
      set(cartItemsAtom, currentCart.map(item =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      set(cartItemsAtom, [...currentCart, { id: uuidv4(), productId: product.id, name: product.name, price: product.price, quantity }]);
    }
  }
);

export const updateCartItemQuantityAtom = atom(
  null,
  (get, set, itemId: string, newQuantity: number) => {
    set(cartItemsAtom, get(cartItemsAtom).map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  }
);

export const removeCartItemAtom = atom(
  null,
  (get, set, itemId: string) => {
    set(cartItemsAtom, get(cartItemsAtom).filter(item => item.id !== itemId));
  }
);

export const cartTotalAmountAtom = atom((get) => {
  return get(cartItemsAtom).reduce((total, item) => total + item.price * item.quantity, 0);
});

export const clearCartAtom = atom(
  null,
  (get, set) => {
    set(cartItemsAtom, []);
  }
);
