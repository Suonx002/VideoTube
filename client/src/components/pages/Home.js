import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/authAction';

import SearchBar from '../layout/SearchBar';
import VideoList from '../layout/VideoList';

const Home = ({ loadUser, auth }) => {
  const { token } = auth;
  useEffect(() => {
    if (token) {
      loadUser();
    }

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='home-search-bar'>
        <SearchBar />
      </div>
      <div className='home-video-list'>
        <VideoList />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loadUser })(Home);
