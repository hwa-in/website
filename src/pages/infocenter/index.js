import React, { Fragment, Component } from 'react';
import { Section, Container } from 'styledComponents';
import WhatsNew from 'components/WhatsNew';
import NewProducts from 'components/NewProducts';
import EventPreview from 'components/Events/EventPreview';
import {
  Body,
  NewsSection,
  LeftSection,
} from 'styledComponents/pages/Infocenter';
import {
  Events,
  FeaturedArticle,
  News,
  Videos,
} from 'components/Infocenter';

const InfoCenter = ({ data }) => {
  const { 
    allContentfulNewsStory: {
      newsStories,
    },
    
    allContentfulEvent: {
      events,
    },
    
    allContentfulVideo: {
      videos,
    },
  } = data;
  return (
    <Section>
      <Section dark>
        <Container>
          <FeaturedArticle>
          {/* Featured article */}
            
          </FeaturedArticle>
          <Body>
            <LeftSection>
              {/* Events preview */}
              {/* Videos */}
            </LeftSection>
            <NewsSection>

            </NewsSection>
          </Body>
        </Container>
      </Section>
    </Section>
  )
};

export default InfoCenter;

export const pageQuery = graphql`
  query InfoCenterQuery {
  allContentfulNewsStory {
    newsStories: edges {
      newsArticle: node {
          slug
          title
          dateWritten,
          description {
            description
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    }
    allContentfulEvent {
      events: edges {
        event: node {
          id
          title
          slug
          startDate(formatString: "MM.DD.YY")
          endDate(formatString: "MM.DD.YY")
          location
          description {
            description
          }
          link
        }
      }
    }
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