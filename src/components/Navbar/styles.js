import styled from 'styled-components';
import { Link } from 'gatsby';

const NavBar = styled.nav`
  background-color: ${props => props.scrolled ? 'white' : undefined};
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const NavLink = styled(Link)`

`

export {
  NavBar,
  NavLinks,
  NavLink,
};