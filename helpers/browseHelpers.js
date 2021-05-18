import tmdb from '/data/tmdb';
import { TMDB } from '/data/tmdbEndpoints';

export const chooseRandomBillboard = (dataLength) =>
  Math.floor(Math.random() * dataLength);

export const shortDescription = (description, length) =>
  description.length > length
    ? description.substr(0, length - 1) + '...'
    : description;

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

  // get trailer
  const trailerEndpoint = TMDB[category].helpers[method].replace(
    '_id',
    banner.id
  );
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

export const getDetails = async (category, id) => {
  const getMethod = (method) => {
    switch (method) {
      case 'trailer':
        return category === 'TVShows'
          ? 'fetchTVTrailers'
          : 'fetchMovieTrailers';
      case 'details':
        return category === 'TVShows' ? 'fetchTVDetails' : 'fetchMovieDetails';
      case 'credits':
        return category === 'TVShows'
          ? 'fetchTVAggregateCredits'
          : 'fetchMovieCredits';
    }
  };

  const getEndPoint = (method) => {
    switch (method) {
      case 'trailer':
        return TMDB[category].helpers[getMethod('trailer')].replace('_id', id);
      case 'details':
        return TMDB[category].helpers[getMethod('details')].replace('_id', id);
      case 'credits':
        return TMDB[category].helpers[getMethod('credits')].replace('_id', id);
    }
  };

  const { data: details } = await tmdb.get(getEndPoint('details'));
  const { data: castData } = await tmdb.get(getEndPoint('credits'));
  const { cast } = castData;

  let trailer = null;
  const { data: trailerData } = await tmdb.get(getEndPoint('trailer'));
  const { results: trailerResults } = trailerData;
  if (trailerResults.length > 0) {
    const trailerDetails = trailerResults
      .reverse()
      .find(({ site, type }) => site === 'YouTube' && type === 'Trailer');
    if (trailerDetails) {
      trailer = trailerDetails.key;
    }
  }

  return { details, cast, trailer };
};
