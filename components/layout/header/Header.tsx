import React from 'react';

import { AppRoutes } from '../../../types/AppRoutes';

import { NavLink } from './navLink/NavLink';

export const Header = () => {
  return (
    <header className="bg-gray-500">
      <nav>
        <NavLink hrefUrl={AppRoutes.DASHBOARD} text="Dashboard" />
        <NavLink hrefUrl={AppRoutes.ABOUT} text="About" />
        <NavLink hrefUrl={AppRoutes.PRODUCTS} text="Products" />
      </nav>
    </header>
  );
};
