import React from 'react';
import { Link } from 'gatsby';
import Carousel from 'components/Carousel';
import {
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
  LearnMore,
} from './styles';

const Product = ({category, id, slug, title, description: {description}, imagePreview: {fluid}}) => {
  return (
    <Link  className="hiddenLink" to={`products/${category.slug}/${slug}`}>
      <ProductContainer key={id}>
        <ImgWrapper>
          <ProductImg src={fluid.src} alt={title}/>
        </ImgWrapper>
        <ProductInfo>
          <h3>{title}</h3>
          <p>{description}</p>
          <LearnMore to={`products/${category.slug}/${slug}`}>Learn More</LearnMore>
        </ProductInfo>
      </ProductContainer>
    </Link>
  )
}

const mapOverProducts = (products) => {
  console.log(products)
  return (
    products.map(({product}, i) => <Product key={i} {...product} />)
  )
}

const ProductList = ({ products }) => {
  const items = mapOverProducts(products)
  return (
    <Carousel products={items} />
  )
}

export default ProductList;
