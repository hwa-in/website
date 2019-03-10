import styled from 'styled-components';
import { variables } from 'style';

const NavList = styled.ul`
  list-style-type:none;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 10px;

  &:after {
    display:block;
    content: '';
    border-bottom: solid 2px ${variables.lightGreen};  
    transform: scaleX(0);  
    transition: transform .4s ease;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  a {
    border-bottom: 0;
    color: ${variables.darkGrey};
  }

  &:first-child {
    margin-left: 0 !important;
  }

  &:last-child {
    &:after {
      display: none;
    }
    a {
      color: ${variables.midGrey};
      pointer-events: none;
    }
  }
`;

export {
  NavList,
  NavItem,
};
