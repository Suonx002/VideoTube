import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ video }) => {
  const { videos } = video;

  return videos !== null && videos.length > 0 ? (
    <div className='video-list-container'>
      {videos.map(video => (
        <VideoItem video={video} />
      ))}
    </div>
  ) : (
    ''
  );
};

const mapStateToProps = state => ({
  video: state.video
});

export default connect(mapStateToProps, {})(VideoList);
