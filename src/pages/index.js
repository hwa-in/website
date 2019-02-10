import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import Hero from '../components/Hero';
import Section from '../components/styledComponents/Section';
import Container from '../components/styledComponents/Container';
import WhatsNew from '../components/WhatsNew';
import NewProducts from '../components/NewProducts';
// import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const {
      hero,
      allStripeSku,
      allContentfulNewsStory,
    } = this.props.data;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const { newsStories } = allContentfulNewsStory;
    const { fluid } = hero.childImageSharp;
    const { products } = allStripeSku;
    return (
      <Layout location={this.props.location}>
        <Fragment>
          <Helmet title={siteTitle} />
          <Hero imageFluid={fluid}>
            <h1>Site Title</h1>
            <h3>Site Description</h3>
          </Hero>
          <Section>
            <Container>
              <NewProducts products={products} />
              <WhatsNew  newsStories={ newsStories } />
            </Container>
          </Section>
        </Fragment>
      </Layout>
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
    allStripeSku {
      products: edges {
        product: node { 
          id
          product {
            name
            images
            caption
          }
        }
      }
    }
  }
`