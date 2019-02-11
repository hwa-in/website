import React from 'react';
import { graphql } from 'gatsby';
import { VideoPreview } from '../../components/previews';
import Section from '../../components/styledComponents/Section';
import {
  Wrapper,
} from './styles';

const VideoPage = ({ data }) => {
  const { videos } = data.allContentfulVideo;
  return (
    <Section>
      <Wrapper>
        {
          videos.map(({ video }, index) => (
          <VideoPreview
            key={index}
            {...video}
            />
            )
          )
        }
      </Wrapper>
    </Section>
  )
};

export default VideoPage;

export const videoPageQuery = graphql`
  query AllVideos {
    allContentfulVideo {
      videos: edges {
        video: node {
          title
          videoLink
        }
      }
    }
  }
`;
