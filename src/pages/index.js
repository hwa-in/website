import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const { products } = this.props.data.productQuery;
    return (
      <Layout location={this.props.location}>
        <Fragment>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div>

          </div>
        </Fragment>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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