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
    featured: null
  };

  componentDidMount() {
    // const { 
    //   allContentfulNewsStory: {
    //     newsStories,
    //   },
    //   allContentfulEvent: {
    //     events,
    //   },
      
    //   allContentfulVideo: {
    //     videos,
    //   },
    // } = this.props.data;
    // this.setState(() => ({
    //   newsStories: newsStories,
    //   events: events,
    //   videos: videos,
    // }))
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { featured, newsStories } = this.state;
  //   if (prevState.featured === featured && featured === null) {
  //     const article = newsStories.shift();
  //     this.setState({
  //       featured: article,
  //       loaded: true,
  //     })
  //   }
  

  render() {
    const { 
      newsQuery: {
        newsStories,
      },
      featuredArticle: {
        edges,
      },
      allContentfulEvent: {
        events,
      },
      allContentfulVideo: {
        videos,
      },
    } = this.props.data;
      return (
        <Fragment>
          <Section noPadBottom>
            <Container justifyCenter>
              <p>Info Center</p>
            </Container>
          </Section>
        <Section>
          <Section dark>
            <Container>
              {edges && <FeaturedArticle {...edges[0].featured} /> }
              <Body>
                <LeftSection>
                  {events && <Events events={events} /> }
                  {videos && <Videos videos={videos} /> }
                </LeftSection>
                <NewsSection>
                  {newsStories && <News newsStories={newsStories} /> }
                </NewsSection>
              </Body>
            </Container>
          </Section>
        </Section>
        </Fragment>
      )
  }
};

export default InfoCenter;

export const pageQuery = graphql`
  query InfoCenterQuery {
  newsQuery: allContentfulNewsStory(skip: 1) {
    newsStories: edges {
      article: node {
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
    featuredArticle: allContentfulNewsStory(limit: 1) {
      edges {
        featured: node {
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
          id
          title
          videoLink
        }
      }
    }
  }
`;