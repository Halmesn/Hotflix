import Nextflix from 'components/browse/Nextflix';

import { getBillboard } from '/helpers/browseHelpers';

import { createContext } from 'react';
import { getSession } from 'next-auth/client';

export const NextflixContext = createContext();

export default function Browse({ ...props }) {
  return (
    <NextflixContext.Provider value={{ ...props }}>
      <Nextflix />
    </NextflixContext.Provider>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // fetch data from tmdb
  const { banner: TVBanner, trailer: TVTrailer } = await getBillboard(
    'TVShows'
  );
  const { banner: movieBanner, trailer: movieTrailer } = await getBillboard(
    'movies'
  );

  const data = { TVBanner, TVTrailer, movieBanner, movieTrailer };

  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    };
  }
  return { props: { session, ...data } };
}
