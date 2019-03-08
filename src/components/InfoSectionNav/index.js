import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { Link } from 'gatsby';
import {
  NavList,
  NavItem,
} from './styles';

const InfoSectionNav = ({ sectionName, sectionSlug }) => {
  return (
    <Section noPadTop>
      <Container>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem>></NavItem>
        <NavItem><Link to="/info-center">Infocenter</Link></NavItem>
        {
          sectionSlug &&
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

export default InfoSectionNav;