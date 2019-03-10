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
  componentDidMount() {
    if (this.props) {
      // console.log("Mounted PRODUCTS", this.props)
    }
  }

  componentDidUpdate() {
    if (this.props) {
      // console.log("Updated PRODUCTS", this.props)
    }
  }
  render () {
    const {products, showProducts, closeList, productPage} = this.props
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
                <ProductList products={products} productPage={productPage} />
              </Slider>
            </Section>
          </Wrapper> 
        )}
      </CSSTransition>
    )
  }
};

export default Products;