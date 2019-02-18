import React from 'react';
import { SkuWrapper } from './styles';
import { CSSTransition } from 'react-transition-group';

const Skus = ({skuList, showSkus}) => { 
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
                <div key={id}>
                  <h2>{attributes.name}</h2>
                </div>
              ))
            }
        </SkuWrapper> 
      )}
    </CSSTransition>
  )
};

export default Skus;
