import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';

const Navbar = ({ logoutUser, auth }) => {
  const { isAuthenticated, user } = auth;

  const onLogout = () => {
    logoutUser();
  };

  const guestLinks = (
    <div className='navbar-container'>
      <div className='navbar-left-link'>
        <Link to='/'>VideoTube</Link>
      </div>
      <div className='navbar-right-link'>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );

  const authLinks = (
    <div className='navbar-container'>
      <div className='navbar-left-link'>
        <Link to='/'>VideoTube</Link>
      </div>
      <div className='navbar-right-link'>
        <a href='#!' className='navbar-intro'>
          Hello, {user && user.name}
        </a>
        <a href='#!' onClick={onLogout}>
          Logout
        </a>
      </div>
    </div>
  );

  return (
    <div className='navbar'>{isAuthenticated ? authLinks : guestLinks}</div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
