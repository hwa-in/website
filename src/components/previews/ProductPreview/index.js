import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import {
  ProductWrapper,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductDescription,
} from './styles';

import styles from '../article-preview.module.css'

const ProductPreview = ({ sku }) => (
  <ProductWrapper>
    {/* <ProductImage /> */}
    <ProductDetails>
      <ProductTitle></ProductTitle>
      <ProductDescription>
        <p></p>
      </ProductDescription>
      <Link to={`/products/`}>
        Learn More
      </Link>
    </ProductDetails>
  </ProductWrapper> 
);

export default ProductPreview;
