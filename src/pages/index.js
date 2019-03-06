import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from 'components/Hero';
import { Section, Container } from 'styledComponents';
import WhatsNew from 'components/WhatsNew';
import NewProducts from 'components/NewProducts';
import EventPreview from 'components/Events/EventPreview';

class RootIndex extends React.Component {
  render() {
    const {
      hero: {
        id,
        title,
        superScript,
        subtitle,
        background: {
          fluid: {
            backgroundImg,
          },
        },
        heroImage: {
          fluid: {
            heroImg,
          },
        },
      },
      allContentfulNewsStory: {
        newsStories,
      },
      featuredProducts: {
        products,
      },
      allContentfulEvent: {
        events,
      }
    } = this.props.data;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    return (
      <Fragment>
        <Helmet title={siteTitle} />
        <Hero 
          background={backgroundImg}
          heroProduct={heroImg}
          id={id}
          title={title}
          superScript={superScript}
          subtitle={subtitle}
        >
          <h1>Site Title</h1>
          <h3>Site Description</h3>
        </Hero>
        <Section>
          <Container row>
            <EventPreview events={events} />
            <WhatsNew  newsStories={ newsStories } />
          </Container>
        </Section>
        <Section dark>
          <NewProducts products={products} />
        </Section>
      </Fragment>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    hero: contentfulHero(id: { eq: "edd30f5a-0c8a-52e9-8ce8-60fb8c510522"}){
      id
      title
      superScript
      subtitle
      background {
        fluid(quality: 100) {
          backgroundImg: src
        }
      }
      heroImage {
        fluid(quality: 100) {
          heroImg: src
      }
    }
	}
  allContentfulNewsStory(limit: 2) {
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
    featuredProducts: allContentfulProducts {
      products: edges {
        product: node {
          id
          slug
          title
          imagePreview {
            fluid(maxWidth: 350, maxHeight: 200) {
              src
            }
          }
          description {
            description
          }
          category {
            slug
          }
        }
      }
    }
    allContentfulEvent(limit: 2) {
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
  }
`