import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '../nex-seo.config';
import { Layout } from '../components/layout/Layout';
import { AppProviders } from '../providers/AppProviders';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
