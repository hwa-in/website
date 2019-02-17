import React from 'react';
import { Section } from '../../components/styledComponents';
import { graphql, Link } from 'gatsby';

const ProductCategoryPage = ({data, pageContext}) => {
console.log(data)
const { skuList } = data.stripeProduct.skus;
return (
  <Section>
    {
      skuList.map(({id, attributes}) => (
          <Link to={`products/${pageContext.id}/${id}`}key={id}>
            <h2>{attributes.name}</h2>
          </Link>
        )
      )
    }
  </Section>      
)}

export default ProductCategoryPage;

export const productCategoryQuery = graphql`
  query ProductCategoryById($id: String!) {
    stripeProduct(id: {eq: $id}) {
      name
      skus {
        skuList: data {
          id
          attributes {
            name
          }
        }
      }
    }
  }
`;
