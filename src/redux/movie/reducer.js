import { CHANGE_MOVIE_REQUEST } from './action';

const initState = {
  movie: '',
};

export default function movie(state = initState.movie, action) {
  switch (action.type) {
    case CHANGE_MOVIE_REQUEST:
      return action.payload;
    default:
      return state;
  }
}
