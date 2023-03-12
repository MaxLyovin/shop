import React, { useEffect } from 'react';
import { useState } from 'react';

import { CartContext } from '@/context/cart/CartContext';
import { CartItem } from '@/context/cart/CartContext.typex';
import { Product } from '@/components/productListItem/ProductListItem.types';
import { storage } from 'services/storage/storage';
import { StorageItem } from 'services/storage/storage.types';

import { CartProviderProps } from './CartProvider.types';

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isInit, setIsInit] = useState(true);
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(storage.getItem(StorageItem.CART_ITEMS) || []);
    setIsInit(false);
  }, []);

  useEffect(() => {
    if (!isInit) {
      storage.setItem(StorageItem.CART_ITEMS, items);
    }
  }, [items, isInit]);

  const addItemToCart = (item: Product) =>
    setItems((prevState) => {
      const existingItem = prevState.find((existingItem) => existingItem.id === item.id);

      if (!existingItem) {
        return [...prevState, { ...item, amount: 1 }];
      }

      return prevState.map((item) => {
        if (item.id !== existingItem.id) return item;

        return {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
      });
    });

  const removeItemFromCart = (id: string) =>
    setItems((prevState) => {
      const existingItem = prevState.find((existingItem) => existingItem.id === id);

      if (!existingItem) {
        return [];
      }

      if (existingItem.amount <= 1) {
        return prevState.filter((item) => item.id !== id);
      }

      return prevState.map((item) => {
        if (item.id !== existingItem.id) return item;

        return {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
      });
    });

  const fullyRemoveItemFromCart = (id: string) => setItems((prevState) => prevState.filter((item) => item.id !== id));

  const clearCart = () => setItems([]);

  const getCartTotalPrice = () =>
    items.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.amount, 0);

  const getCartTotalItems = () => items.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        fullyRemoveItemFromCart,
        clearCart,
        getCartTotalPrice,
        getCartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
