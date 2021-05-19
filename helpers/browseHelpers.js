import tmdb from '/data/tmdb';
import { TMDB } from '/data/tmdbEndpoints';

export const chooseRandomBillboard = (dataLength) =>
  Math.floor(Math.random() * dataLength);

export const shortDescription = (description, length) =>
  description.length > length
    ? description.substr(0, length - 1) + '...'
    : description;

export const getBanner = async (category) => {
  const { data: data1 } = await tmdb.get(
    TMDB[category].sections[1].endpoint.replace('_pageNumber', 1)
  );
  const { data: data2 } = await tmdb.get(
    TMDB[category].sections[1].endpoint.replace('_pageNumber', 2)
  );
  const { results: results1 } = data1;
  const { results: results2 } = data2;
  const resultsPools = [...results1, ...results2];
  const filteredResults = resultsPools.filter(
    ({ original_language, title }) =>
      original_language === 'en' &&
      title !== 'Mortal Kombat' &&
      title !== 'The Walking Dead' &&
      title !== 'Superman & Lois'
  );
  const banner = filteredResults[chooseRandomBillboard(filteredResults.length)];

  return banner;
};

export const getTrailer = async (category, id) => {
  const method =
    category === 'TVShows' ? 'fetchTVTrailers' : 'fetchMovieTrailers';

  const trailerEndpoint = TMDB[category].helpers[method].replace('_id', id);

  let trailer = null;
  const { data } = await tmdb.get(trailerEndpoint);
  const { results } = data;
  if (results.length > 0) {
    const trailerDetails = results.reverse().find(
      ({ site, type }) =>
        site === 'YouTube' &&
        // get all the possible type
        (type === 'Trailer' ||
          type === 'Featurette' ||
          type === 'Clip' ||
          type === 'Opening Credits')
    );
    if (trailerDetails) {
      trailer = trailerDetails.key;
    }
  }

  return trailer;
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

export const getEpisodes = async (season, id) => {
  const { data } = await tmdb.get(
    TMDB.TVShows.helpers.fetchTVSeason
      .replace('_id', id)
      .replace('_seasonNumber', season)
  );

  const { episodes } = data;

  return episodes;
};

export const getRecommendations = async (category, id) => {
  const getMethod = () =>
    category === 'TVShows'
      ? 'fetchTVRecommendations'
      : 'fetchMovieRecommendations';

  const { data } = await tmdb.get(
    TMDB[category].helpers[getMethod()].replace('_id', id)
  );

  const { results: recommendations } = data;

  return recommendations;
};

export const getSliderItems = async (section) => {
  const { data } = await tmdb.get(
    section.endpoint.replace('&page=_pageNumber', '')
  );
  console.log(data);

  const { results: sliderItems } = data;

  return sliderItems;
};
