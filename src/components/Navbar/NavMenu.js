import React, { Fragment } from 'react';
import {
  Menu,
  NavLink,
  NavLinks,
  LinkWrapper,
  LogoContainer,
  ProductButton
} from './styles.js';
import { Link } from 'gatsby';
import Media from "react-media";
import MobileNav from './MobileNav';
import ProductsModal from './ProductsModal';

const routes = [ 
  {
    title: 'About',
    titleTemp: '關於我們',
    route: 'about/',
  },
  {
    title: 'Infocenter',
    titleTemp: '信息中心',
    route: 'infocenter/',
  },
  {
    title: 'Jobs',
    titleTemp: '人才招募',
    route: 'recruit/',
  },
  {
    title: 'FAQ',
    titleTemp: 'FAQ',
    route: 'faqs/',
  },
  {
    title: 'Contact',
    titleTemp: '聯絡我們',
    route: 'contact/',
  }
];

class NavMenu extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  render() {
    const { src, className, categories} = this.props;
    return (
      <Menu className={`nav-links ${className ? className : ''}`}>
        <LogoContainer>
          <Link to="/">
            <img src={src} alt="logo" />
          </Link>
        </LogoContainer>
        <Media query="(min-width: 768px)">
            {matches =>
              matches ? (
                <Fragment>
                <LinkWrapper>
                  <NavLinks>
                    <li onClick={this.handleClickOpen}>
                      <ProductButton>
                        Products
                      </ProductButton>
                    </li>
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
                <ProductsModal
                  open={this.state.open}
                  onClose={this.handleClose}
                  categories={categories}
                />
                </Fragment>
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
}


export default NavMenu;

