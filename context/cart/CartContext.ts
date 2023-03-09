import { createContext } from 'react';

import { CartContextProps } from './CartContext.typex';

export const CartContext = createContext<CartContextProps | undefined>(undefined);
