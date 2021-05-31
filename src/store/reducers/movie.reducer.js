import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_NEW_LIST_SUCCESS,
  GET_NEW_LIST_FAILED,
  GET_MOVIE_DETAIL_FAILED,
  GET_NEW_DETAIL_SUCCESS,
  GET_NEW_DETAIL_FAILED,
  GET_MOVIE_TIME_SUCCESS,
  GET_MOVIE_TIME_FAILED,
} from "../constants/movie.const";

const initialState = {
  movieList: [],
  newList: [],
  movieDetail: {},
  movieTime: {},
  newDetail: {},
  errors: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS: {
      state.movieList = payload;
      return { ...state };
    }
    case GET_MOVIE_LIST_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    //newList
    case GET_NEW_LIST_SUCCESS: {
      state.newList = payload;
      return { ...state };
    }
    case GET_NEW_LIST_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    // detail
    case GET_MOVIE_DETAIL_SUCCESS: {
      return { ...state, movieDetail: payload };
    }
    case GET_MOVIE_DETAIL_FAILED: {
      return { ...state, errors: payload };
    }
    // new detail
    case GET_NEW_DETAIL_SUCCESS: {
      return { ...state, newDetail: payload };
    }
    case GET_NEW_DETAIL_FAILED: {
      return { ...state, errors: payload };
    }
    // time
    case GET_MOVIE_TIME_SUCCESS: {
      return { ...state, movieTime: payload };
    }
    case GET_MOVIE_TIME_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default movieReducer;
