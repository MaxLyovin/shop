import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { GetProductListDocument, GetProductListQuery } from '../../generated/graphql';
import { apolloClient } from '../../graphql/apolloClient';
import { AppRoutes } from '../../types/AppRoutes';

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      Posts:
      <div>
        {data.products.map((product) => (
          <div key={product.id} className="px-2 odd:bg-slate-300">
            <Link href={`${AppRoutes.PRODUCTS}/${product.slug}`}>{product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductListQuery>({
    query: GetProductListDocument,
  });

  return { props: { data } };
};
