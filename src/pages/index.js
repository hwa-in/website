import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from 'components/Hero';
import { Section, Container } from 'styledComponents';
import WhatsNew from 'components/WhatsNew';
import NewProducts from 'components/NewProducts';

class RootIndex extends React.Component {
  render() {
    const {
      hero: {
        childImageSharp: {
          fluid,
        },
      },
      allContentfulNewsStory: {
        newsStories,
      },
      featuredProducts: {
        products,
      },
    } = this.props.data;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    return (
      <Fragment>
        <Helmet title={siteTitle} />
        <Hero imageFluid={fluid}>
          <h1>Site Title</h1>
          <h3>Site Description</h3>
        </Hero>
        <Section>
          <Container row>
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
    hero: file(relativePath: { eq: "index-hero.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allContentfulNewsStory {
    newsStories: edges {
      newsArticle: node {
          slug
          title
          dateWritten
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
  }
`