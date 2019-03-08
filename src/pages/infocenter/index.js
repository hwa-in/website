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

class InfoCenter extends Component {
  state = {
    
  };

  componentDidMount() {
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
    } = this.props.data;
    this.setState(() => ({
      newsStories: newsStories,
      events: events,
      videos: videos,
      loaded: true,
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps: \n", prevProps.data, "New Props: \n", this.props.data)
  }

  render() {
    const { newsStories, events, video, loaded } = this.state;

    if (loaded) {
      return (
        <Section>
          <Section dark>
            <Container>
              {/* Featured article */}
              <Body>
                <LeftSection>
                  {/* Events preview */}
                  {/* <Events events={events} /> */}
                  {/* Videos */}
                  <Videos />
                </LeftSection>
                <NewsSection>
                  <News />
                </NewsSection>
              </Body>
            </Container>
          </Section>
        </Section>
      )
    }

    return (
      <div>
        Loading
      </div>
    )
  }
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