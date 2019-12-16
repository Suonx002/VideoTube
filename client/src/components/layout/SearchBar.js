import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchVideos, clearVideos } from '../../actions/youtubeAction';
import { setAlert, clearAlert } from '../../actions/alertAction';
import Alerts from './Alerts';

import './SearchBar.css';

const SearchBar = ({
  fetchVideos,
  video,
  setAlert,
  clearAlert,
  clearVideos
}) => {
  const [searchInput, setSearchInput] = useState('');

  const { videos } = video;

  const onChange = e => setSearchInput(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    fetchVideos(searchInput);
  };

  useEffect(() => {
    if (videos !== null && videos.length === 0) {
      setAlert('No Results found. Please try again!', 'danger');
      setTimeout(() => {
        clearAlert();
        clearVideos();
      }, 2000);
    }
    //eslint-disable-next-line
  }, [videos]);

  return (
    <>
      <Alerts />
      <form className='search-bar-form' onSubmit={onSubmit}>
        <input
          type='text'
          className='search-bar-input'
          name='searchInput'
          placeholder='Search for videos ...'
          onChange={onChange}
        />
        <button type='submit' className='search-bar-btn'>
          Search
        </button>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  video: state.video
});

export default connect(mapStateToProps, {
  fetchVideos,
  setAlert,
  clearAlert,
  clearVideos
})(SearchBar);
