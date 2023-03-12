import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { ProductListItem } from '../../components/productListItem/ProductListItem';
import { GetProductListDocument, GetProductListQuery } from '../../generated/graphql';
import { apolloClient } from '../../graphql/apolloClient';
import { AppRoutes } from '../../types/AppRoutes';

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title="Products" />
      <div>
        Products:
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
          {data.products.map((product) => (
            <ProductListItem key={product.id} {...product}></ProductListItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductListQuery>({
    query: GetProductListDocument,
  });

  return { props: { data } };
};
