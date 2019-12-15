import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Register.css';
import Alerts from '../layout/Alerts';
import { setAlert, clearAlert } from '../../actions/alertAction';
import { registerUser, clearErrors } from '../../actions/authAction';

const Register = ({
  setAlert,
  clearAlert,
  registerUser,
  auth,
  clearErrors,
  history
}) => {
  const { error, isAuthenticated } = auth;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      setUser({
        name: '',
        email: '',
        password: '',
        password2: ''
      });
      history.push('/');
    }

    if (error) {
      setAlert(error, 'danger');
      setTimeout(() => {
        clearAlert();
        clearErrors();
      }, 2000);
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert('Please fill out all fields', 'warning');
    } else if (password.length < 6) {
      setAlert('Password must be at least 6 characters', 'warning');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      registerUser({ name, email, password });
    }

    setTimeout(() => {
      clearAlert();
    }, 2000);
  };

  return (
    <div className='register'>
      <Alerts />
      <h2 className='register-header'>Account Sign Up</h2>
      <form className='register-form-container' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />
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
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          onChange={onChange}
        />
        <button type='submit' className='register-btn'>
          Register
        </button>
      </form>
      <div className='have-an-account'>
        <span>Already have an account?</span> <Link to='/login'>Login</Link>
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
  registerUser,
  clearErrors
})(Register);
