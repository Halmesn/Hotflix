import tmdb from '/data/tmdb';
import { TMDB } from '/data/tmdbEndpoints';

export const chooseRandomBillboard = (dataLength) =>
  Math.floor(Math.random() * dataLength);

export const getBillboard = async (category) => {
  const method =
    category === 'TVShows' ? 'fetchTVTrailers' : 'fetchMovieTrailers';

  // get banner
  const { data: bannerData } = await tmdb.get(
    TMDB[category].sections[1].endpoint
  );
  const { results: bannerResults } = bannerData;
  const filteredResults = bannerResults.filter(
    ({ original_language }) => original_language === 'en'
  );
  const banner = filteredResults[chooseRandomBillboard(filteredResults.length)];
  const trailerEndpoint = TMDB[category].helpers[method].replace(
    '_id',
    banner.id
  );

  // get trailer
  let trailer = null;
  const { data: trailerData } = await tmdb.get(trailerEndpoint);
  const { results: trailerResults } = trailerData;
  if (trailerResults.length > 0) {
    const trailerDetails = trailerResults
      .reverse()
      .find(({ site, type }) => site === 'YouTube' && type === 'Trailer');
    if (trailerDetails) {
      trailer = trailerDetails.key;
    }
  }

  return { banner, trailer };
};
