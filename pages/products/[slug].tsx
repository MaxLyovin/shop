import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import { apolloClient } from '../../graphql/apolloClient';
import { AppRoutes } from '../../types/AppRoutes';
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from '../../generated/graphql';

const Product = ({ data, notFound }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{data?.product?.name}</title>
      </Head>
      <div>
        <div className="my-4">
          <Link href={AppRoutes.PRODUCTS}>{`<-- go back to posts`}</Link>
        </div>
        <p>{data?.product?.name}</p>
        <p>{data?.product?.description}</p>
      </div>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  const paths = data.products.map((product) => {
    return { params: { slug: product.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { data } = await apolloClient.query<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>({
    variables: {
      slug: params?.slug,
    },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data.product) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return { props: { data } };
};
