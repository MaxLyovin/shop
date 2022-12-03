import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { AppRoutes } from '../../types/AppRoutes';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function loadPost(id: string) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());

  return data;
}

const Post = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div className="my-4">
        <Link href={AppRoutes.POSTS}>{`<-- go back to posts`}</Link>
      </div>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: Post[] = await res.json();
  const paths = data.map((post) => {
    return { params: { id: String(post.id) } };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
  const data = await loadPost(params?.id || '0');

  return { props: { data } };
};
