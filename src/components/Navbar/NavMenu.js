import React from 'react';
import {
  Menu,
  NavLink,
  NavLinks,
  LinkWrapper,
  LogoContainer,
} from './styles.js';
import { Link } from 'gatsby';
import routes from '../../routes';

const NavMenu = ({src}) => {
  return (
    <Menu className='nav-links'>
      <LogoContainer>
        <Link to="/">
          <img src={src} alt="logo" />
        </Link>
      </LogoContainer>
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
    </Menu>
  )
}


export default NavMenu;

