import React from 'react';
import { Section, Container } from 'styledComponents';
import ProductNav from 'components/Products/ProductNav';
import Category from 'components/Category';

const CategoryPage = ({data, pageContext}) => {
const { slug, title, products, name } = pageContext;
console.log(data.categoryQuery)
const { description, categoryImage } = data.categoryQuery;
// let posterior = products.filter(product => product.subCategory === "Posterior")
// let anterior = products.filter(product => product.subCategory === "Anterior")

// console.log("Category Page, anterior", anterior)
return (
  <Section>
    <ProductNav
      categorySlug={slug}
      categoryName={name}
    />
    <Container>
      <h1>{title}</h1>
      <Category
        {...data.categoryQuery}
      />
      {/* <Category
        categoryTitle="Anterior"
        slug={slug}
        products={anterior}
        subCategory={true}
      />
      <Category
        categoryTitle="Posterior"
        slug={slug}
        products={posterior}
        subCategory={true}
      /> */}
      {/* <div>
      {
        products.map(({id, title, slug}) => (
          <Link to={`products/${pageContext.slug}/${slug}`} key={id}>
            <h2>{title}</h2>
          </Link>
        ))
      }
      </div> */}
    </Container>
  </Section>  
)}

export default CategoryPage;

export const ProductQuery = graphql`
  query CategoryBySlug($slug: String!) {
    categoryQuery: contentfulCategory(slug: { eq: $slug}) {
      description {
        description
      }
      categoryImage {
        fluid {
          src
        }
      }
      products {
        id
        slug
        title
        price
        description {
          description
        }
        category {
          slug
          name
          categoryTitle
        }
        subCategory
        imagePreview {
          fluid(maxWidth: 350, maxHeight: 200) {
            src
          }
        }
      }
    }
  }
`;