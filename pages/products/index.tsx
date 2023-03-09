import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { ProductListItem } from '../../components/productListItem/ProductListItem';
import { GetProductListDocument, GetProductListQuery } from '../../generated/graphql';
import { apolloClient } from '../../graphql/apolloClient';
import { AppRoutes } from '../../types/AppRoutes';

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        Products:
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
          {data.products.map(({ id, name, images, slug, price }) => (
            <ProductListItem key={id} name={name} slug={slug} images={images} price={price}></ProductListItem>
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
