import React from 'react';
import { SkuWrapper } from './styles';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

const Skus = ({skuList, productId, showSkus}) => { 
  return (
    <CSSTransition
      in={showSkus}
      timeout={500}
      classNames="skus"
    >
      {(state) => (
        <SkuWrapper className="skus">
            {
              skuList.map(({id, attributes}) => (
                <Link
                to={`/products/${productId}/${id}/`}
                key={id}>
                  <h2>{attributes.name}</h2>
                </Link>
              ))
            }
        </SkuWrapper> 
      )}
    </CSSTransition>
  )
};

export default Skus;
