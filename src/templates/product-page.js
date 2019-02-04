import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'   
import Layout from '../components/layout'

class ProductPageTemplate extends React.Component {
  render() {
    console.log(this.props.data)
    // const { id, image, product: {
    //     name,
    //     caption
    //   }
    // } = this.props.data.stripeSku
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${siteTitle}`} />
          {/* <div className="wrapper">
            <img src={image} />
            <h1>{name}</h1>
            <h4>{caption}</h4> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProductPageTemplate

// export const pageQuery = graphql`
//   query ProductById($id: String!) {
//     stripeSku(id: {eq: $id}) {
//       id
//       image
//       product {
//         name
//         caption
//       }
//     } 
//   }
// `