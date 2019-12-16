import { combineReducers } from 'redux';

import alertReducer from './alertReducer';
import authReducer from './authReducer';
import youtubeReducer from './youtubeReducer';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  video: youtubeReducer
});
