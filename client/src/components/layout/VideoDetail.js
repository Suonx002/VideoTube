import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import SuggestionVideo from './SuggestionVideo';

import './VideoDetail.css';

const VideoDetail = ({ match, history, video }) => {
  const { videos } = video;

  //find the right video description
  let description = null;
  if (videos !== null && videos.length !== 0) {
    description = videos.filter(video => video.id.videoId === match.params.id);
  }

  // shuffle from stack overflow
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let firstFiveSuggestion = null;
  if (videos !== null && videos.length !== 0) {
    const getShuffledArr = arr => {
      const newArr = arr.slice();
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr;
    };

    //randomize list videos and make suggestion to 5
    const randomizeList = getShuffledArr(videos);
    firstFiveSuggestion = randomizeList.slice(0, 3);
  }

  // from link
  const videoSrc = `https://www.youtube.com/embed/${match.params.id}`;

  const vidoeEmbedded = (
    <div className='video-detail-content'>
      <iframe
        style={{
          height: '100%',
          width: '100%',
          border: 'none'
        }}
        title='Video Player'
        src={videoSrc}
      />
      <div className='video-detail-description'>
        {description !== null && description[0].snippet.description}
      </div>
    </div>
  );

  const suggestionVideos = (
    <>
      <div className='video-detail-suggestion'>
        <h3 className='video-detail-header'>Suggestion Videos</h3>
        {firstFiveSuggestion !== null &&
          firstFiveSuggestion.map(video => <SuggestionVideo video={video} />)}
      </div>
    </>
  );

  return (
    <>
      <div className='back-btn'>
        <Link to='/'>Back To Homepage</Link>
      </div>
      <div className='video-detail-container'>
        {vidoeEmbedded}
        {suggestionVideos}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  video: state.video
});

export default connect(mapStateToProps, {})(VideoDetail);
