import Authentication from 'components/account/Authentication';

import Head from 'next/head';
import { getSession } from 'next-auth/client';

export default function Account() {
  return (
    <>
      <Head>
        <title>Hotfilx - create or sign in your account</title>
      </Head>
      <Authentication />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/browse',
        permanent: false,
      },
    };
  }

  return { props: { session } };
}
