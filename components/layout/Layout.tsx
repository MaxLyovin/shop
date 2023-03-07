import React from 'react';

import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
