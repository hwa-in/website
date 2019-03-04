import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { graphql } from 'gatsby';
import Category from './Category';
import {
  CategorySection,
} from './styles';
import ProductNav from 'components/ProductNav';

const ProductsPage = ({data}) => {
  const { categories } = data.categoryQuery;
  const { products } = data.lazerSystemQuery;
  let lazerSystems = {
    slug: 'lazer-systems',
    categoryTitle: 'Lazer Systems',
    products: []
  };

  // Adds Lazer System products to the lazerSystems obj for use by category component
  categories.forEach(({category}) => {
    category.products.forEach((product) => {
      if (product.lazerSystem) {
        lazerSystems.products.push(product)
      }
    })
  })

  return (
    <Fragment>
      <Section>
        <ProductNav />
        <Container>
          Products
          <CategorySection>
            <Category
              {...lazerSystems}
            />
            {
              categories.map(({category}, index) => {
                return (
                <Category 
                  key={index}
                  {...category} 
                />
              )})
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
    lazerSystemQuery: allContentfulProducts(filter: {lazerSystem: { eq: true}}) {
      products: edges {
        node {
          id
          lazerSystem
          title
          price
          subCategory
          slug
        }
      }
    }
    categoryQuery: allContentfulCategory {
      categories: edges {
        category: node {
          slug
          categoryTitle
          products {
            id
            lazerSystem
            title
            price
            subCategory
            slug
          }
        }
      }
    }
  }
`