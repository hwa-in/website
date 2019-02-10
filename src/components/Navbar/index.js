import React from 'react';
import {
  NavBar,
  NavLinks,
  NavLink,
} from './styles.js';
import routes from '../../routes';

export default () => (
  <NavBar role="navigation">
    <NavLinks className='nav-links'>
      {
        routes.map((link, index) => (
          <NavLink
            key={index}
            to={link.route}
          >
            {link.title}
          </NavLink>
        ))
      }
    </NavLinks>
  </NavBar>
)

