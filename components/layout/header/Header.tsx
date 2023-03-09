import React from 'react';

import { CartBar } from '../../cart/CartBar';
import { AppRoutes } from '../../../types/AppRoutes';

import { NavLink } from './navLink/NavLink';

export const Header = () => {
  return (
    <header className="bg-gray-500 h-10 flex  items-center justify-between px-4">
      <nav className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 text-lg">
        <NavLink hrefUrl={AppRoutes.DASHBOARD} text="Dashboard" />
        <NavLink hrefUrl={AppRoutes.ABOUT} text="About" />
        <NavLink hrefUrl={AppRoutes.PRODUCTS} text="Products" />
      </nav>
      <CartBar className="w-6 h-6 text-white " />
    </header>
  );
};
