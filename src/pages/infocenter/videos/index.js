import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { VideoPreview } from 'components/previews';
import { Section, Container }from 'styledComponents';
import InfoSectionNav from 'components/InfoSectionNav';
import {
  Wrapper,
} from 'styledComponents/pages/Video';

const VideoPage = ({ data }) => {
  const { videos } = data.allContentfulVideo;
  return (
    <Fragment>
      <Section>
        <Section noPad>
          <Container justifyCenter>
            <InfoSectionNav 
              sectionName="Videos"
            />
          </Container>
        </Section>
        <Section noPadBottom>
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
      </Section>
    </Fragment>
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
