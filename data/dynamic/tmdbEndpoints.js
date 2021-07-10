/* I chose to use NEXT_PUBLIC here because this post on TMDB website:
https://www.themoviedb.org/talk/582744abc3a3683601019dcc

'TMDB api keys aren't intended for authentication, 
so don't worry too much about making it public 
since you can get API keys for free. 
And there's very little motivation for anyone to steal it.
*/
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const TMDB = {
  TVShows: {
    sections: [
      {
        title: 'Popular on Hotflix',
        endpoint: `/tv/popular?api_key=${API_KEY}`,
      },
      {
        title: 'Trending Now',
        endpoint: `/trending/tv/day?api_key=${API_KEY}&page=_pageNumber`,
      },
      {
        title: 'War Politics',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10768&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Hotflix Original',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_watch_providers=8&watch_region=AU`,
        size: 'large',
      },
      {
        title: 'Sci-Fi & Fantasy',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10765&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Documentary',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Comedy',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Animation',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Drama',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Family',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Mystery',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Action-Adventure',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10759&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Crime',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Reality',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10764&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Talk',
        endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=10767&with_watch_providers=8&watch_region=AU`,
      },
    ],
    helpers: {
      searchTV: `/search/tv?api_key=${API_KEY}&query=_query`,
      fetchTVGenres: `genre/tv/list?api_key=${API_KEY}`,
      fetchTVTrailers: `/tv/_id/videos?api_key=${API_KEY}`,
      fetchTVDetails: `/tv/_id?api_key=${API_KEY}`,
      fetchTVAggregateCredits: `/tv/_id/aggregate_credits?api_key=${API_KEY}`,
      fetchTVRecommendations: `/tv/_id/recommendations?api_key=${API_KEY}`,
      fetchTVSeason: `/tv/_id/season/_seasonNumber?api_key=${API_KEY}`,
    },
  },
  movies: {
    sections: [
      {
        title: 'Popular on Hotflix',
        endpoint: `/movie/popular?api_key=${API_KEY}&region=AU`,
      },
      {
        title: 'Trending Now',
        endpoint: `/trending/movie/day?api_key=${API_KEY}`,
      },
      {
        title: 'Upcoming',
        endpoint: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=AU`,
      },
      {
        title: 'Hotflix Original',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_watch_providers=8&watch_region=AU`,
        size: 'large',
      },
      {
        title: 'Playing in Australian Cinemas',
        endpoint: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=AU`,
      },
      {
        title: 'Sci-Fi',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=878&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Drama',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Fantasy',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=14&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Crime',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Mystery',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Action',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Comedy',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Animation',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Adventure',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Family',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'TV',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10770&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Documentary',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'War',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10752&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'History',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=36&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Western',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=37&with_watch_providers=8&watch_region=AU`,
      },
      {
        title: 'Thriller',
        endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=AU`,
      },
    ],
    helpers: {
      searchMovie: `/search/movie?api_key=${API_KEY}&query=_query`,
      fetchMovieGenres: `genre/movie/list?api_key=${API_KEY}`,
      fetchMovieTrailers: `/movie/_id/videos?api_key=${API_KEY}`,
      fetchMovieDetails: `/movie/_id?api_key=${API_KEY}`,
      fetchMovieRecommendations: `/movie/_id/recommendations?api_key=${API_KEY}`,
      fetchMovieCredits: `/movie/_id/credits?api_key=${API_KEY}`,
    },
  },
};
