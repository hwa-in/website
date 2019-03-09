import React from 'react';
import { VideoPreview } from 'components/previews';
import { H2 } from 'styledComponents/Header';
import { Section } from 'styledComponents';

const Videos = ({ videos }) => {

  return (
    <Section
      dark
      pad="2rem 0"
    >
      <H2>Recommended Videos</H2>
      {
        videos.map(({video}) => <VideoPreview key={video.id} {...video} />) 
      }
    </Section>
  )
};

export default Videos;