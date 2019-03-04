import React from 'react';
import { Section, Container } from 'styledComponents';
import { graphql, Link } from 'gatsby';
import ProductNav from 'components/ProductNav';

const CategoryPage = ({data, pageContext}) => {
const { slug, title, products } = pageContext;
console.log(products)
return (
  <Section>
    <ProductNav
      categorySlug={slug}
      categoryName={title}
    />
    <Container>
      <h1>{title}</h1>
      <div>
      {
        products.map(({id, title, slug}) => (
          <Link to={`products/${pageContext.slug}/${slug}`} key={id}>
            <h2>{title}</h2>
          </Link>
        ))
      }
      </div>
    </Container>
  </Section>  
)}

export default CategoryPage;
