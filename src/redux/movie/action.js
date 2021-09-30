export const CHANGE_MOVIE_REQUEST = 'CHANGE_MOVIE_REQUEST';

export const changeMovie = (payload) => ({
  type: CHANGE_MOVIE_REQUEST,
  payload,
});
