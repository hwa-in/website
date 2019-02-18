import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { graphql } from 'gatsby';
import Category from './Category';
import {
  CategorySection,
} from './styles';

const ProductsPage = ({data}) => {
  const { categories } = data.allStripeProduct;
  return (
    <Fragment>
      <Section>
        <Container flexDirection={'column'}>
          Products
          <CategorySection>
            {
              categories.map(({category}) => (
                <Category 
                  key={category.id}
                  {...category} 
                />
              ))
            }
          </CategorySection>
        </Container>
      </Section>
    </Fragment>
  )
}

export default ProductsPage;

export const ProductQuery = graphql`
  query {
    allStripeProduct {
      categories: edges {
        category: node {
          name
          id
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
    }
  }
`