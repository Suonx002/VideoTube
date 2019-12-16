import { FETCH_VIDEOS, VIDEOS_ERROR, CLEAR_VIDEOS } from '../actions/types';

const initialState = {
  videos: null,
  selectedVideo: null,
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      };
    case VIDEOS_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload.message
      };
    case CLEAR_VIDEOS:
      return {
        ...state,
        loading: true,
        videos: null
      };
    default:
      return state;
  }
};
