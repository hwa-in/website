import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { graphql } from 'gatsby';
import Category from 'components/Category';
import {
  CategorySection,
} from 'styledComponents/pages/Products';
import ProductNav from 'components/ProductNav';

const ProductsPage = ({data}) => {
  const { categories } = data.categoryQuery;
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
              categories.map(({category}, index) => (
                <Category
                  key={index}
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