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
    const { pathname } = this.props.location;
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
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              categorQuery: allContentfulCategory {
                categories: edges {
                  category: node {
                    name
                    slug
                    categoryImage {
                      fluid(maxHeight: 650) {
                        ...GatsbyContentfulFluid
                      }
                    }
                    products {
                      productTitle: title
                      productSlug: slug
                    }
                  }
                }
              }
            }
          `}
          render={({image, categorQuery}) => {
            const { fixed } = image.childImageSharp;
            return (
              <NavMenu
                fixed={fixed}
                className={notHome && "not-home"}
                location={pathname}
                {...categorQuery}
              />
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

