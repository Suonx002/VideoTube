import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Alerts from '../layout/Alerts';
import { setAlert, clearAlert } from '../../actions/alertAction';
import { loginUser, clearErrors } from '../../actions/authAction';

import './Login.css';

const Login = ({
  setAlert,
  clearAlert,
  loginUser,
  clearErrors,
  auth,
  history,
  loadUser
}) => {
  const { error, isAuthenticated } = auth;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
      // loadUser();
    }
    if (error) {
      setAlert('Invalid Credentials', 'danger');
      setTimeout(() => {
        clearAlert();
        clearErrors();
      }, 1500);
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      setAlert('Please fill out all fields', 'warning');
      setTimeout(() => {
        clearAlert();
      }, 1500);
    } else {
      loginUser({ email, password });
    }
  };

  return (
    <div className='login'>
      <Alerts />
      <h2 className='login-header'>Account Login</h2>
      <form className='login-form-container' onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
        />
        <button type='submit' className='login-btn'>
          Login
        </button>
      </form>
      <div className='dont-have-account'>
        <span>Dont't have an account?</span> <Link to='/register'>Sign up</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  setAlert,
  clearAlert,
  loginUser,
  clearErrors
})(Login);
