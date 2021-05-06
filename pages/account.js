import Authentication from 'components/account/Authentication';
import Head from 'next/head';

export default function Account() {
  return (
    <>
      <Head>
        <title>Nextfilx - create or sign in your account</title>
      </Head>
      <Authentication />
    </>
  );
}
