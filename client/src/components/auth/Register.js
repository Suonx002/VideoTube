import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Register.css';
import Alerts from '../layout/Alerts';
import { setAlert, clearAlert } from '../../actions/alertAction';
import { registerUser } from '../../actions/authAction';

const Register = ({ setAlert, clearAlert }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert('Please fill out all fields', 'warning');
    }

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    }

    setTimeout(() => {
      clearAlert();
    }, 1500);
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

export default connect(null, { setAlert, clearAlert })(Register);
