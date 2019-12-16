import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

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

// load users
export const loadUser = () => async dispatch => {
  // console.log(localStorage.token);
  setAuthToken(localStorage.token);
  // console.log(setAuthToken(localStorage.token));
  try {
    const res = await axios.get('/api/auth');
    // console.log(res);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err
    });
  }
};

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

    // console.log(res);
  } catch (err) {
    // console.log(err.response.data.msg);
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    });
  }
};

//login user
export const loginUser = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/auth', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message
    });
  }
};

// logout user

export const logoutUser = () => {
  return {
    type: LOGOUT
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
