import React from 'react';
import { graphql, Link } from 'gatsby';
import { Section, Container } from 'styledComponents';
import ProductNav from 'components/ProductNav';

const ProductPageTemplate  = ({ data, pageContext }) => {
  const { name } = data.stripeSku.attributes;
  const { productName } = data.stripeSku.product;
  return (
    <Section>
      <ProductNav
        categoryId={pageContext.productId}
        categoryName={productName}
        skuName={name}
        skuId={pageContext.id}
      />
      <Container>
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