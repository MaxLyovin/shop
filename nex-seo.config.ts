import { DefaultSeoProps } from 'next-seo';

import { APP_URL, APP_NAME } from './consts';

const config: DefaultSeoProps = {
  title: APP_NAME,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],

  openGraph: {
    title: APP_NAME,
    siteName: APP_NAME,
    url: APP_URL,
  },
};

export default config;
