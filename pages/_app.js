import 'styles/globals.css';

import Layout from 'components/layout/Layout';
import Head from 'next/head';

import { Provider } from 'next-auth/client';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
        <meta
          property="og:title"
          content="Hotflix - watch TV shows online, watch movies online"
        />
        <meta
          property="og:image"
          content="https://hotflix-clone.vercel.app/images/misc/background.jpg"
        />
        <meta
          property="og:description"
          content="Hotflix is a Netflix clone that comes with all the basic functionalities Netflix offers."
        />
        <meta property="og:url" content="https://hotflix-clone.vercel.app/" />
      </Head>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
