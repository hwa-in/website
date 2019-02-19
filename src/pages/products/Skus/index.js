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

const Skus = ({skuList, productId, showSkus}) => { 
  return (
    <CSSTransition
      in={showSkus}
      timeout={500}
      classNames="skus"
    >
      {(state) => (
        <SkuWrapper className="skus">
          <SkuContainer>
            <Close>x</Close>
            <SkuSlider>
            {
              skuList.map(({id, attributes}) => (
                <Link
                to={`/products/${productId}/${id}/`}
                key={id}>
                  <h3>{attributes.name}</h3>
                </Link>
              ))
            }
            </SkuSlider>
            </SkuContainer>
        </SkuWrapper> 
      )}
    </CSSTransition>
  )
};

export default Skus;
