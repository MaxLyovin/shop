import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { CartProvider } from './cart/CartProvider';
import { AppProvidersProps } from './AppProviders.types';

import { apolloClient } from '@/graphql/apolloClient';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <CartProvider>{children}</CartProvider>
    </ApolloProvider>
  );
};
