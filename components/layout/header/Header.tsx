import React from 'react';

import { AppRoutes } from '../../../types/AppRoutes';

import { NavLink } from './navLink/NavLink';

export const Header = () => {
  return (
    <header className="bg-gray-500 h-10 flex justify-center items-center">
      <nav className="flex justify-center content-center gap-4 md:gap-8 lg:gap-12 text-lg">
        <NavLink hrefUrl={AppRoutes.DASHBOARD} text="Dashboard" />
        <NavLink hrefUrl={AppRoutes.ABOUT} text="About" />
        <NavLink hrefUrl={AppRoutes.PRODUCTS} text="Products" />
      </nav>
    </header>
  );
};
