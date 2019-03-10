import React from 'react';
import {
  Wrapper,
  Close,
  Slider,
} from './styles';
import { CSSTransition } from 'react-transition-group';
import { Section } from 'styledComponents';
import ProductList from './ProductList';

class Products extends React.Component {
  render () {
    const {products, showProducts, closeList, productPage, categorySlug} = this.props
    return (
      <CSSTransition
        in={showProducts}
        timeout={500}
        classNames="products"
      >
        {(state) => (
          <Wrapper className="products">
            <Section dark noPad>
              <Close onClick={() => closeList()}>x</Close>
              <Slider>
                <ProductList 
                  products={products}
                  productPage={productPage}
                  categorySlug={categorySlug}
                />
              </Slider>
            </Section>
          </Wrapper> 
        )}
      </CSSTransition>
    )
  }
};

export default Products;