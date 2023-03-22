import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '@/graphql/apolloClient';

import { CartProvider } from './cart/CartProvider';
import { StripeProvider } from './stripe/StripeProvider';
import { ReactQueryProvider } from './reactQuery/ReactQueryProvider';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <StripeProvider>
        <ReactQueryProvider>
          <CartProvider>{children}</CartProvider>
        </ReactQueryProvider>
      </StripeProvider>
    </ApolloProvider>
  );
};
