import React from 'react';
import { VideoPreview } from 'components/previews';
import { ViewAll } from 'styledComponents/Button';
import { H2 } from 'styledComponents/Header';
import styled from 'styled-components';
import { Section } from 'styledComponents';

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Videos = ({ videos }) => {
  return (
    <Section
      dark
      pad="2rem 0"
    >
    <HeaderSection>
      <H2>Recommended Videos</H2>
      <ViewAll to="/infocenter/videos" text="All" light/>
      </HeaderSection>
      {
        videos.map(({video}) => <VideoPreview key={video.id} {...video} />) 
      }
    </Section>
  )
};

export default Videos;