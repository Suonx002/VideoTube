import React from 'react';

import { Link } from 'react-router-dom';
import './SuggestionVideo.css';

const SuggestionVideo = ({ video }) => {
  return (
    <div className='suggestion-video-card'>
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          className='suggestion-video-img'
        />
        <p className='suggestion-video-title'>{video.snippet.title}</p>
        <p className='suggestion-video-author'>{video.snippet.channelTitle}</p>
      </Link>
    </div>
  );
};

export default SuggestionVideo;
