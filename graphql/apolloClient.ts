import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clb9dep071y4f01uk3al13o9c/master',
  cache: new InMemoryCache(),
});
