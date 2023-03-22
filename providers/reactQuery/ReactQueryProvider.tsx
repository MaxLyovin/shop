import { Children } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryProviderProps } from './ReactQueryProvider.types';

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
