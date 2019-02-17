import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from '../../components/styledComponents';

const ProductPageTemplate  = ({data}) => {
  console.log(data)
  const { name } = data.stripeSku.attributes;
  return (
    <Section>
      <Container flexDirection='column'>
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
    } 
  }
`