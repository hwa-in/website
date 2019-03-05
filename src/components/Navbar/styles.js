import styled from 'styled-components';
import { Link } from 'gatsby';
import { variables } from 'style'

const NavBar = styled.nav`
  background-color: ${props => props.scrolled ? variables.white : undefined};
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
`

const Menu = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const LogoContainer = styled.div`
  margin-right: 1rem;
  padding: 5px;
`

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
`

export {
  NavBar,
  Menu,
  LogoContainer,
  LinkWrapper,
  NavLinks,
  NavLink,
};