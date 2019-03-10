import React from 'react';
import {
  Wrapper,
  Close,
  Slider,
} from './styles';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import { Container, Section } from 'styledComponents';
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
    const {products, categorySlug, showProducts, closeList, subCategory} = this.props
    return (
      <CSSTransition
        in={showProducts}
        timeout={500}
        classNames="products"
      >
        {(state) => (
          <Wrapper className="products">
            <Section dark noPad>
            <Container>
              <Close onClick={() => closeList()}>x</Close>
              <Slider>
                <ProductList products={products} />
              </Slider>
              </Container>
            </Section>
          </Wrapper> 
        )}
      </CSSTransition>
    )
  }
};

export default Products;