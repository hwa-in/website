import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { variables } from 'style';
import { FaList } from 'react-icons/fa';

const Container = styled.div`
position: relative;
width: 100%;
min-height: 1px;
flex: 0 0 33.33333%;
max-width: 33.33333%;

a {
  float: right;
  padding: .25rem .75rem;
  font-size: 14px;
  line-height: .9rem;
  border-radius: 2px;
  color: ${variables.darkGreen};
  background-color: ${props => props.light ? variables.white : variables.offWhite};
  border: 0; 
  transform: translateY(25%);
  white-space: nowrap;

  svg { 
    font-size: 14px;
    margin-right: 6px;
  }
}
`;

const ViewAll = ({to, text, light }) => (
  <Container light>
    <Link className="events-btn" to={to}><FaList /> {text}</Link>
  </Container>
);

export default ViewAll;