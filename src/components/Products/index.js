import React from 'react';
import {
  Wrapper,
  Close,
  Slider,
} from './styles';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import { Container, Section } from 'styledComponents';
// import Carousel from 'components/Carousel';
// import productList from './productList';

const Products = ({products, categorySlug, showProducts, closeList, subCategory}) => {
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
              {/* {
                products ? 
                <Carousel products={productList(products)} />
                :
                <div>
                  loading
                </div>
              } */}
            </Slider>
            </Container>
          </Section>
        </Wrapper> 
      )}
    </CSSTransition>
  )
};

export default Products;
