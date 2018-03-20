import {makeAction} from "async-action-creator";

import moviesApi from "../../services/movies";

export const fetchMovies = makeAction("movies/FETCH_MOVIES");

export const loadMovies = () => async dispatch => {
  const {data} = await moviesApi.fetch();

  dispatch(fetchMovies.resolve(data.data.movies));

  window.temp = data.data.movies[0];

  console.log(data);
};
