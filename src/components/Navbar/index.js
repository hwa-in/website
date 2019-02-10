import React from 'react';
import {
  NavBar,
  NavLinks,
  NavLink,
} from './styles.js';

const navLinks = [ 
  {
    title: 'About',
    route: 'about/',
  },
  {
    title: 'News',
    route: 'news/',
  },
  {
    title: 'Products',
    route: 'products/',
  },
  {
    title: 'Video',
    route: 'video/',
  },
  {
    title: 'Recruit',
    route: 'recruit/',
  },
  {
    title: 'FAQ',
    route: 'faq/',
  },
  {
    title: 'Contact',
    route: 'contact/',
  }
];

export default () => (
  <NavBar role="navigation">
    <NavLinks className='nav-links'>
      {
        navLinks.map((link, index) => (
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

