import {fetchMovies} from "../actions/movies";

const initialState = {
  list: [],
};

const context = (state = initialState, {type, payload}) => {
  switch (type) {
    case fetchMovies.RESOLVED:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};

export default context;
