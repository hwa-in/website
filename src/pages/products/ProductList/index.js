import React from 'react';
import {
  SkuWrapper,
  SkuContainer,
  Close,
  SkuSlider,
} from './styles';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

const ProductList = ({products, categorySlug, showProducts, closeList, subCategory}) => {
  return (
    <CSSTransition
      in={showProducts}
      timeout={500}
      classNames="skus"
    >
      {(state) => (
        <SkuWrapper className="skus">
          <SkuContainer>
            <Close onClick={() => closeList()}>x</Close>
            {!subCategory && <Link to={`/products/${categorySlug}/`}>View All</Link>}
            <SkuSlider>
            {
              products.map(({id, title, slug}) => {
                return (
                  <Link
                  to={`/products/${categorySlug}/${slug}/`}
                  key={id}>
                    <h3>{title}</h3>
                  </Link>
                )
              })
            }
            </SkuSlider>
            </SkuContainer>
        </SkuWrapper> 
      )}
    </CSSTransition>
  )
};

export default ProductList;
