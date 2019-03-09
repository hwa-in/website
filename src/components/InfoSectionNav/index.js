import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { Link } from 'gatsby';
import {
  NavList,
  NavItem,
} from './styles';

const InfoSectionNav = ({ sectionSlug, sectionName, pageName, pageSlug }) => {
  console.log(sectionName)
  return (
    <NavList>
      <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem>></NavItem>
      {
        sectionName ? 
          <Fragment>
            <NavItem><Link to="/infocenter">Infocenter</Link></NavItem>
            <NavItem>></NavItem>
            <NavItem className={pageSlug ? '' : 'active'}><Link to={`/infocenter/${sectionSlug}/`}>{sectionName}</Link></NavItem>
          </Fragment>
          : 
          <NavItem className="active">Infocenter</NavItem>
      }
    </NavList>
  )
};

export default InfoSectionNav;