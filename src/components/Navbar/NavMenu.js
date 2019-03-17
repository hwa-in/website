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
import routes from '../../routes';

class NavMenu extends React.Component {
  state = {
    open: true,
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

