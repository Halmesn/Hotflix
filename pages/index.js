import Hero from 'components/home/hero/Hero';
import Feature from 'components/home/feature/Feature';
import Accordion from 'components/home/accordion/Accordion';
import Head from 'next/head';
import { getSession } from 'next-auth/client';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotfilx - watch TV shows online, watch movies online</title>
      </Head>
      <Hero />
      <Feature />
      <Accordion />
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
