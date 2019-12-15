import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

  return <div className='navbar'>{guestLinks}</div>;
};

export default Navbar;
