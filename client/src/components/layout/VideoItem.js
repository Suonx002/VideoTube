import React from 'react';
import { Link } from 'react-router-dom';

import './VideoItem.css';
const VideoItem = ({ video }) => {
  return (
    <Link
      to={`/video/${video.id.videoId}`}
      className='video-item-link'
      key={video.id.videoId}>
      <div className='video-item-card'>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className='video-item-title'>{video.snippet.title}</div>
        <div className='video-item-author'>{video.snippet.channelTitle}</div>
      </div>
    </Link>
  );
};

export default VideoItem;
