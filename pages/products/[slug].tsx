import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useMutation } from '@apollo/client';

import { APP_URL, APP_NAME } from '../../consts';
import { apolloClient } from '../../graphql/apolloClient';
import { AppRoutes } from '../../types/AppRoutes';
import {
  CreateProductReviewDocument,
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from '../../generated/graphql';

const ProductPage = ({ product, notFound }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [sendOpinion, { data, loading, error }] = useMutation(CreateProductReviewDocument);

  const handleClick = () => {
    sendOpinion({
      variables: {
        review: {
          headline: 'From App',
          name: 'some one',
          email: 'some@email.com',
          content: 'good good!',
          rating: 5,
        },
      },
    });
  };

  return (
    <>
      <NextSeo
        title={product?.name}
        openGraph={{
          url: `${APP_URL}${product?.slug}`,
          title: product?.name,
          description: product?.description,
          images: [
            {
              url: product?.images[0].url as string,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: APP_NAME,
        }}
      />
      <div>
        <div className="my-4">
          <Link href={AppRoutes.PRODUCTS}>{`<-- go back to posts`}</Link>
        </div>
        <p>{product?.name}</p>
        <p>{product?.description}</p>

        <button onClick={handleClick} className="m5 border p-2">
          send opinion
        </button>
      </div>
    </>
  );
};

export default ProductPage;

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

  return { props: { product: data.product } };
};
