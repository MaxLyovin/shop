import { Product } from '@/components/productListItem/ProductListItem.types';

export type CartItem = Product & {
  amount: number;
};

export type CartContextProps = {
  items: CartItem[];
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (id: string) => void;
  fullyRemoveItemFromCart: (id: string) => void;
  clearCart: () => void;
  getCartTotalPrice: () => number;
  getCartTotalItems: () => number;
};
