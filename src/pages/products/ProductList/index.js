import React from 'react';
import {
  SkuWrapper,
  SkuContainer,
  Close,
  SkuSlider,
} from './styles';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
// import ProductPreview from 'components/preview'

const ProductList = ({products, categoryId, showProducts, closeList}) => { 
  console.log(products)
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
            <SkuSlider>
            {
              products.map(({id, title, slug}) => {
                return (
                  <Link
                  to={`/products/${categoryId}/${slug}/`}
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
