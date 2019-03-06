import React, { Fragment } from 'react';
import {
  Menu,
  NavLink,
  NavLinks,
  LinkWrapper,
  LogoContainer,
} from './styles.js';
import { Link } from 'gatsby';
import Media from "react-media";
import MobileNav from './MobileNav';
import routes from '../../routes';

const NavMenu = ({src}) => {
  return (
    <Menu className='nav-links'>
      <LogoContainer>
        <Link to="/">
          <img src={src} alt="logo" />
        </Link>
      </LogoContainer>
      <Media query="(min-width: 768px)">
          {matches =>
            matches ? (
              <LinkWrapper>
                <NavLinks>
                  {
                    routes.map((link, index) => (
                      <li key={index}>
                        <NavLink to={link.route}>
                          {link.title}
                        </NavLink>
                      </li>
                    ))
                  }
                </NavLinks>
              </LinkWrapper>
            ) : (
              <Fragment>
                <MobileNav />
              </Fragment>
            )
          }
        </Media>
    </Menu>
  )
}


export default NavMenu;

