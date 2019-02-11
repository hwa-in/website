import React from 'react';
import {
  VideoContainer,
} from './styles';

const VideoPreview = ({ title, videoLink }) => (
  <VideoContainer>
    <h1>{title}</h1>
    <iframe 
      src={videoLink}
      title={title}
    />
  </VideoContainer>
);

export default VideoPreview;