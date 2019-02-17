import React, { Fragment } from 'react';
import { Section, Container } from '../../components/styledComponents';
import { graphql, Link } from 'gatsby';
import { CategoryContainer } from './styles';

const ProductsPage = ({ data }) => {
  console.log(data)
  const { categories } = data.allStripeProduct;
  return (
    <Fragment>
      <Section>
        <Container flexDirection={'column'}>
          Products
          <CategoryContainer>
            {
              categories.map(({category}) => (
                <Link 
                  to={`products/${category.id}`}
                  key={category.id}
                >
                  <h1>
                    {category.name}
                  </h1>
                </Link>
              ))
            }
          </CategoryContainer>
        </Container>
      </Section>
    </Fragment>
  )
};

export default ProductsPage;

export const ProductQuery = graphql`
  query {
    allStripeProduct {
      categories: edges {
        category: node {
          name
          id
        }
      }
    }
  }
`