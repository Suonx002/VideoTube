import axios from 'axios';
import { VIDEOS_ERROR, FETCH_VIDEOS, CLEAR_VIDEOS } from './types';

let youtubeApiKey;

if (process.env.NODE_ENV === 'production') {
  youtubeApiKey = process.env.YOUTUBE_API_KEY;
} else {
  youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
}

export const fetchVideos = searchTerm => async dispatch => {
  try {
    const res = await axios('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 12,
        key: youtubeApiKey
      }
    });
    dispatch({
      type: FETCH_VIDEOS,
      payload: res.data.items
    });
  } catch (err) {
    dispatch({
      type: VIDEOS_ERROR,
      payload: err
    });
  }
};

export const clearVideos = () => {
  return {
    type: CLEAR_VIDEOS
  };
};
