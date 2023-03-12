import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '@/graphql/apolloClient';

import { CartProvider } from './cart/CartProvider';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <CartProvider>{children}</CartProvider>
    </ApolloProvider>
  );
};
