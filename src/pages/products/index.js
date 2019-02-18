import React, { Fragment } from 'react';
import { Section, Container } from '../../components/styledComponents';
import { graphql } from 'gatsby';
import { CategoryContainer } from './styles';
import ProductContainer from './ProductContainer';

const ProductsPage = ({data}) => {
    const { categories } = data.allStripeProduct;
    return (
      <Fragment>
        <Section>
          <Container flexDirection={'column'}>
            Products
            <CategoryContainer>
              {
                categories.map(({category}) => (
                  <ProductContainer 
                    key={category.id}
                    {...category} 
                  />
                ))
              }
            </CategoryContainer>
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