import React from 'react';
import {
  NavBar,
  NavLinks,
  NavLink,
} from './styles.js';
import routes from '../../routes';
import throttle from 'lodash/throttle';

const SCROLLBREAK = 100;

const CUSTOM_SCROLLBREAKS = {
  '/': 50,
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      menuOpen: false,
    };
    this.toggler = React.createRef();
    this.toggleNavScroll = throttle(this.toggleNavScroll.bind(this), 150);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleNavScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleNavScroll);
  }

  toggleNavScroll() {
    const scrollPosition = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    const scrollBreak = CUSTOM_SCROLLBREAKS[this.props.location.pathname] || SCROLLBREAK;
    if (scrollPosition >= scrollBreak) {
      this.setState(prevState => (
        !prevState.scrolled ? { scrolled: true } : false
      ));
    }

    if (scrollPosition < scrollBreak) {
      this.setState(prevState => (
        prevState.scrolled ? { scrolled: false } : false
      ));
    }
  }

  render() {
    const { scrolled } = this.state;
    return (
      <NavBar 
        role="navigation"
        scrolled={scrolled}
      >
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
  }
}

export default Navbar;

