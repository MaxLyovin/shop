import React from 'react';

import { NavLink } from './navLink/NavLink';
import { AppRoutes } from '../../../types/AppRoutes';

export const Header = () => {
  return (
    <header className="bg-gray-500">
      <nav>
        <NavLink hrefUrl={AppRoutes.DASHBOARD} text="Dashboard" />
        <NavLink hrefUrl={AppRoutes.POSTS} text="Posts" />
        <NavLink hrefUrl={AppRoutes.ABOUT} text="About" />
      </nav>
    </header>
  );
};
