import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { AppRoutes } from '../../types/AppRoutes';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await res.json();

  return data;
}

const PostsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      Posts:
      <div>
        {posts.map((post) => (
          <div key={post.id} className="px-2 odd:bg-slate-300">
            <Link href={`${AppRoutes.POSTS}/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await loadPosts();

  return { props: { posts } };
};
