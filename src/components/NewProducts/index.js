import React from 'react';
import { Link } from 'gatsby';
import {
  NewProductWrapper,
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
} from './styles';


const Product = ({id, product: {name, images, caption}}) => {
  // console.log(product)
  return (
    <ProductContainer>
      <ImgWrapper>
        <ProductImg src={images[0]} alt={name}/>
      </ImgWrapper>
      <ProductInfo>
        <h3>{name}</h3>
        <p>{caption}</p>
        <Link to={`products/${id}`}>Buy me</Link>
      </ProductInfo>
    </ProductContainer>
  )
}

const NewProducts = ({products}) => {
  return (
    <NewProductWrapper>
      <h1>New Products</h1>
        {
          products.map(({ product }) => {
            return (
              <Product 
                key={product.id}
                {...product}
              />
            )
          })
        }
    </NewProductWrapper>
  )
}

export default NewProducts;
