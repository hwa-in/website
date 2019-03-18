import styled from 'styled-components';
import { Link } from 'gatsby';
import { variables, media } from 'style'

const NavBar = styled.nav`
  background-color: ${props => props.scrolled ? variables.white : 'transparent'};
  position: fixed;
  width: 100%;
  z-index: 101;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background-color .3s ease;

  :hover {
    background-color: ${variables.white};
  }

  &.not-home {
    background-color: ${variables.white};
  }
`;

const Spacer = styled.div`
  height: 70px;
  background-color: transparent;
`;

const Menu = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;

  ${media.tablet`
    justify-content: space-around;
  `}

  &.not-home {
    background-color: ${variables.white};
    :after {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      border-bottom: 1px solid #dee2e6;
      content: "";
      position: absolute;
      height: 71px;
      left: 0;
      right: 0;
      pointer-events: none;
    }
  }

  :after {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    border-bottom: ${props => props.scrolled ? '1px solid #dee2e6' : undefined};
    content: "";
    position: absolute;
    height: 71px;
    left: 0;
    right: 0;
    pointer-events: none;
  }
`;

const LogoContainer = styled.div`
  margin-right: 1rem;
  margin-left: 20px;
  padding: 5px;

  a {
    text-decoration: none;
    border: 0;
  }
  
  ${media.tablet`
    margin-left: 1rem;
  `}
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  margin-left: auto;

  li {
    list-style-type: none;
    list-style-position: outside;
    text-align: left;
    text-size-adjust: 100%;

    &:after {
      display: block;
      content: '';
      border-bottom: solid 2px ${variables.lightGreen};  
      transform: scaleX(0);  
      transition: transform .4s ease;
    }
  
    &:hover:after {
      transform: scaleX(.75);
    }
  }
`

const NavLink = styled(Link)`
  padding: 1rem!important;
  margin: 0 .1rem!important;
  border: 0;
`;

const ProductButton = styled.div`
  padding: 1rem!important;
  margin: 0 .1rem!important;
  border: 0;
  font-weight: 100;
  transition: all .3s ease;
  display: inline;
`;


export {
  NavBar,
  Spacer,
  Menu,
  LogoContainer,
  LinkWrapper,
  NavLinks,
  NavLink,
  ProductButton,
};