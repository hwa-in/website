import React from 'react';
import { Section, Container } from 'styledComponents';
import { graphql, Link } from 'gatsby';
import ProductNav from 'components/ProductNav';
import Category from '../../pages/products/Category';
import ProductList from '../../pages/products/ProductList';

const CategoryPage = ({data, pageContext}) => {
const { slug, title, products } = pageContext;
console.log(products)
let posterior = products.filter(product => product.subCategory === "Posterior")
let anterior = products.filter(product => product.subCategory === "Anterior")

console.log("Category Page, anterior", anterior)
return (
  <Section>
    <ProductNav
      categorySlug={slug}
      categoryName={title}
    />
    <Container>
      <h1>{title}</h1>
      <Category
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
      />
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
