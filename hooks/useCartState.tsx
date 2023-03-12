import { useContext } from 'react';

import { CartContext } from '@/context/cart/CartContext';

export const useCartState = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCartState must be used within CartProvider');
  }

  return context;
};
