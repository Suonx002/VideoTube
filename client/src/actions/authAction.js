import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from './types';

//register user
export const registerUser = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/users', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    console.log(res);
  } catch (err) {
    // console.log(err.response.data.msg);
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    });
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
