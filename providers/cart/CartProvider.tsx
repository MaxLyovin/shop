import React from 'react';

import { CartContext } from '../../context/cart/CartContext';

import { CartProviderProps } from './CartProvider.types';

export const CartProvider = ({ children }: CartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
