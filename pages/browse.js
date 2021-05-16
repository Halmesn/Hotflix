import Nextflix from 'components/browse/Nextflix';

import tmdb from '/api/tmdb';
import { TMDB } from '/api/tmdbEndpoints';
import { chooseRandomBillboard } from '/helpers/browseHelpers';

import { getSession } from 'next-auth/client';

export default function Browse() {
  return <Nextflix />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // fetch data from tmdb
  const { data: TVData } = await tmdb.get(TMDB['TVShows'].sections[1].endpoint);
  const { data: movieData } = await tmdb.get(
    TMDB['movies'].sections[1].endpoint
  );
  const { results: TVResults } = TVData;
  const { results: movieResults } = movieData;
  const billBoardTVDetails = TVResults[chooseRandomBillboard(TVResults.length)];
  const billBoardMovieDetails =
    movieResults[chooseRandomBillboard(TVResults.length)];
  const TVTrailerEndPoint = TMDB.TVShows.helpers.fetchTVTrailers.replace(
    '_id',
    billBoardTVDetails.id
  );
  const movieTrailerEndPoint = TMDB.movies.helpers.fetchMovieTrailers.replace(
    '_id',
    billBoardMovieDetails.id
  );
  const TVTrailerResponse = await tmdb.get(TVTrailerEndPoint);
  const movieTrailerResponse = await tmdb.get(movieTrailerEndPoint);

  console.log(movieTrailerResponse.data.results);

  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    };
  }
  return { props: { session } };
}
