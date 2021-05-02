import Hero from 'components/home/hero/Hero';
import Feature from 'components/home/feature/Feature';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextfilx - watch TV shows online, watch movies online</title>
      </Head>
      <Hero />
      <Feature />
    </>
  );
}
