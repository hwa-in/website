import React, { Fragment } from 'react';
import {
  NavBar,
} from './styles.js';
import { StaticQuery, graphql } from "gatsby"
import throttle from 'lodash/throttle';
import NavMenu from './NavMenu';
import { 
  Spacer 
} from './styles';

const SCROLLBREAK = 0;

const CUSTOM_SCROLLBREAKS = {
  '/': 100,
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      menuOpen: false,
      notHome: false,
    };
    this.toggler = React.createRef();
    this.toggleNavScroll = throttle(this.toggleNavScroll.bind(this), 150);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleNavScroll);

    if (this.props.location.pathname !== '/') {
      this.setState({
        notHome: true,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleNavScroll);
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location
    const { notHome } = this.state
      if (pathname !== '/') {
        if (!notHome) {
          this.setState({
            notHome: true,
          })
        }
      } else {
        if (notHome) {
          this.setState({
            notHome: false,
          })
        }
      }
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
    const { scrolled, notHome } = this.state; 
    return (
      <Fragment>
        <NavBar 
          role="navigation"
          scrolled={scrolled}
          className={notHome && "not-home"}
        >
        <StaticQuery
          query={graphql`
            query NavQuery {
              image: file(relativePath: {eq: "logo.png"}){
                childImageSharp {
                  fixed(width: 68, height: 59) {
                    src
                  }
                }
              }
            }
          `}
          render={({image}) => {
            const { src } = image.childImageSharp.fixed;
            return (
              <NavMenu src={src} className={notHome && "not-home"} />
            )
          }}
        />
        </NavBar>
        { notHome && <Spacer scrolled={scrolled} /> }
      </Fragment>
    )
  }
}

export default Navbar;

