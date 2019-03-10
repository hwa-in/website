import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';
import ProductNav from 'components/Products/ProductNav';

const ProductPageTemplate  = ({ data, pageContext }) => {
  const { title, slug } = data.contentfulProducts;
  const { categorySlug, categoryTitle } = pageContext;
  return (
    <Section>
      <ProductNav
        categorySlug={categorySlug}
        categoryName={categoryTitle}
        productName={title}
        productSlug={slug}
      />
      <Container>
        <h1>{title}</h1>
      </Container>
    </Section>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductById($id: String!) {
    contentfulProducts(id: {eq: $id}) {
      id
      slug
      title
    } 
  }
`