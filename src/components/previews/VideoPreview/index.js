import React from 'react';
import {
  VideoWrapper,
} from './styles';

const VideoPreview = ({ title, videoLink }) => (
    <VideoWrapper>
      <iframe 
        src={videoLink}
        title={title}
      />
    <p>{title}</p>
    </VideoWrapper>
);

export default VideoPreview;