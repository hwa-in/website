import React from 'react';
import { graphql, Link } from 'gatsby';
import { Section, Container } from '../../components/styledComponents';

const ProductPageTemplate  = ({ data, pageContext }) => {
  console.log(data)
  const { name } = data.stripeSku.attributes;
  const { productName } = data.stripeSku.product;
  return (
    <Section>
      <Container flexDirection='column'>
        <div>
          <Link to='/products/'>All Products</Link> 
          <Link to={`/products/${pageContext.productId}/`}>{productName}</Link>
        </div>
        <h1>{name}</h1>
      </Container>
    </Section>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductById($id: String!) {
    stripeSku(id: {eq: $id}) {
      id
      attributes {
        name
      }
      product {
        productName: name
      }
    } 
  }
`