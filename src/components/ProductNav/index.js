import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { Link } from 'gatsby';
import {
  NavList,
  NavItem,
} from './styles';

const ProductNav = ({categoryId, categoryName, skuName, skuId }) => {
  console.log(categoryId, categoryName, skuName)
  return (
    <Section noPadTop>
      <Container>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem>></NavItem>
        <NavItem><Link to="/products">Products</Link></NavItem>
        {
          categoryId &&
            <Fragment>
              <NavItem>></NavItem>
              <NavItem><Link to={`/products/${categoryId}/`}>{categoryName}</Link></NavItem>
              {
                skuId &&
                <Fragment>
                  <NavItem>></NavItem>
                  <NavItem><Link to={`/products/${categoryId}/${skuId}`}>{skuName}</Link></NavItem>
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
