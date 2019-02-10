import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/Hero';
// import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    console.log(this.props.data.hero)
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const image = get(this, 'props.data.hero.childImageSharp.fluid')
    const { products } = this.props.data.productQuery;
    return (
      <Layout location={this.props.location}>
        <Fragment>
          <Helmet title={siteTitle} />
          <Hero imageFluid={image}>
          </Hero>
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
    productQuery: allStripeSku {
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