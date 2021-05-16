import tmdb from '/api/tmdb';
import { TMDB } from '/api/tmdbEndpoints';

export const chooseRandomBillboard = (dataLength) =>
  Math.floor(Math.random() * dataLength);

export const getBillboard = () => {};
