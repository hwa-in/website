import React from 'react';
import {
  VideoContainer,
  VideoWrapper,
} from './styles';

const VideoPreview = ({ title, videoLink }) => (
  <VideoContainer>
    <VideoWrapper>
      <iframe 
        src={videoLink}
        title={title}
      />
    </VideoWrapper>
    <p>{title}</p>
  </VideoContainer>
);

export default VideoPreview;