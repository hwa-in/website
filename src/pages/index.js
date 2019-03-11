import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from 'components/Hero';
import { Section, Container } from 'styledComponents';
import WhatsNew from 'components/WhatsNew';
import ProductList from 'components/Products/ProductList';
import EventPreview from 'components/Events/EventPreview';
import styled from 'styled-components';
import { variables } from 'style';

const NewProductWrapper = styled.article`
  width: 100%;
  margin: 0 auto;
  padding: 120px 0;
  background-color: ${variables.white};

  h1 {
    text-align: center;
    margin-bottom: 60px;
    color: ${variables.darkGreen};
  }

  .hiddenLink {
    height: 100%;
    width: 100%;
  }
`;

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
          <NewProductWrapper>
            <h1>New Products</h1>
            <ProductList products={products} />
          </NewProductWrapper>
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
        fluid {
          backgroundImg: src
        }
      }
      heroImage {
        fluid {
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
        node {
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
          subCategory
          category {
            slug
            name
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