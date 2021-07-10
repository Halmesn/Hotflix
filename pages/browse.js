import Hotflix from 'components/browse/Hotflix';

import { getGenres as fetchGenres } from 'helpers/browseHelpers';

import { createContext } from 'react';
import { getSession } from 'next-auth/client';

export const GenresContext = createContext();

export default function Browse({ TvGenres, MovieGenres }) {
  const providerValue = { TvGenres, MovieGenres };

  return (
    <GenresContext.Provider value={providerValue}>
      <Hotflix />
    </GenresContext.Provider>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const TvGenres = await fetchGenres('TVShows');
  const MovieGenres = await fetchGenres('movies');

  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    };
  }
  return { props: { session, TvGenres, MovieGenres } };
}
