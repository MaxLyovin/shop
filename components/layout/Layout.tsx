import React from 'react';
import Head from 'next/head';

import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps) => {
  console.log(process.env.APOLLO_CLIENT_URI);
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};
