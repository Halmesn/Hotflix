import tmdb from 'data/dynamic/tmdb';
import { TMDB } from 'data/dynamic/tmdbEndpoints';

/**
 * Return a random number that's less than data array's length.
 *
 * @param {Number} dataLength - data array's length.
 * @return {Number} a random number less than data array's length.
 * @example chooseRandomBanner(filteredResults.length)
 */
export const chooseRandomBanner = (dataLength) =>
  Math.floor(Math.random() * dataLength);

/**
 * Return shorter description
 *
 * @param {String} description - a string needed to be shortened
 * @param {Number} length - desired length
 * @return {String} a shortened string or original string depends on the length.
 * @example shortDescription('long string!',2)
 */
export const shortDescription = (description, length) =>
  description.length > length
    ? description.substr(0, length - 1) + '...'
    : description;

/**
 * Return a boolean value to see whether the Tv show or movie is newly released or not.
 *
 * @param {String} date - a date string like "2016-01-25"
 * @return {Boolean}
 * @example isNewRelease('2016-01-25')
 */
export const isNewRelease = (date) => {
  const releaseDate = new Date(date);
  const currentDate = new Date();
  const gap = currentDate.getTime() - releaseDate.getTime();
  return Math.ceil(gap / (1000 * 3600 * 24)) <= 30;
};

// below are fetch functions that are quite straightforward
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
    ({ original_language, original_name, original_title }) =>
      original_language === 'en' &&
      // get rid of items that its video can't be played
      (original_name || original_title) !== 'Mortal Kombat' &&
      (original_name || original_title) !== 'The Walking Dead' &&
      (original_name || original_title) !== 'Superman & Lois' &&
      (original_name || original_title) !== 'Fear the Walking Dead' &&
      (original_name || original_title) !== 'Master of None'
  );
  const banner = filteredResults[chooseRandomBanner(filteredResults.length)];

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
        // get all possible types
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

  const { results: sliderItems } = data;

  return sliderItems;
};

export const getGenres = async (category) => {
  const getMethod = () =>
    category === 'TVShows' ? 'fetchTVGenres' : 'fetchMovieGenres';

  const { data } = await tmdb.get(TMDB[category].helpers[getMethod()]);

  const { genres } = data;

  return genres;
};

export const getSearchResults = async (category, query) => {
  const getMethod = () => (category === 'TVShows' ? 'searchTV' : 'searchMovie');

  const { data } = await tmdb.get(
    TMDB[category].helpers[getMethod()].replace('_query', query)
  );

  const { results } = data;

  const filteredResults = results
    .filter(({ backdrop_path }) => backdrop_path)
    .sort((a, b) => b.popularity - a.popularity);

  return filteredResults;
};

export const playerConfig = {
  playerVars: {
    // player not respond to keyboard controls
    disablekb: 1,
    // video annotations not be shown
    iv_load_policy: 3,
  },
};
