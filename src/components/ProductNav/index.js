import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { Link } from 'gatsby';
import {
  NavList,
  NavItem,
} from './styles';

const ProductNav = ({categorySlug, categoryName, productName, productSlug }) => {
  return (
    <Section noPad>
      <Container>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem>></NavItem>
        <NavItem><Link to="/products">Products</Link></NavItem>
        {
          categorySlug &&
            <Fragment>
              <NavItem>></NavItem>
              <NavItem><Link to={`/products/${categorySlug}/`}>{categoryName}</Link></NavItem>
              {
                productSlug &&
                <Fragment>
                  <NavItem>></NavItem>
                  <NavItem><Link to={`/products/${categorySlug}/${productSlug}`}>{productName}</Link></NavItem>
                </Fragment>
              }
            </Fragment>
        }
      </NavList>
      </Container>
    </Section>
  )
};

export default ProductNav;
