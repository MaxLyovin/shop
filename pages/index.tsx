import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboar</title>
      </Head>
      <div>Dashboard</div>
    </div>
  );
}
