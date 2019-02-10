import styled from 'styled-components';
import { Link } from 'gatsby';

const NavBar = styled.nav`

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