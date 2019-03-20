import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { graphql } from 'gatsby';
import Category from 'components/Category';
import {
  CategorySection,
  HeaderSection,
  Title,
  Description,
} from 'styledComponents/pages/Products';
import ProductNav from 'components/Products/ProductNav';

const ProductsPage = ({data}) => {
  const { categories } = data.categoryQuery;

  return (
    <Fragment>
      <Section noPadBottom>
        <ProductNav />
        <Container>
          <HeaderSection>
            <Title>Products</Title>
            <Description>Here you’ll find detailed information on our eye lasers, treatment tools, diagnostic systems, service products and technologies.</Description>
          </HeaderSection>
        </Container>
          <CategorySection>
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
          name
          description {
            description
          }
          categoryImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          products {
            id
            slug
            title
            price
            description {
              childMarkdownRemark {
                excerpt(pruneLength: 200)
              }
            }
            category {
              slug
              name
              categoryTitle
            }
            subCategory
            imagePreview {
              fluid(maxWidth: 350, maxHeight: 200) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`