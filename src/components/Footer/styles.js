import styled from 'styled-components';
import Container from '../styledComponents/Container';
import Section from '../styledComponents/Section';
import { Link } from 'gatsby';
import { variables } from '../../style';

const FooterContainer = styled.footer`
  width: 100vw;
  min-height: 150px;
  padding: 25px 0;
  background-color: ${variables.midGrey};
  padding: 0;
`;

const RouteSection = styled(Section)`
  background-color: ${variables.darkGrey}
  height: 50px;
  display: flex;
  align-items: center;
`;

const RouteContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const Route = styled(Link)`
  color: ${variables.lightGrey};
`;

const FooterInfo = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    line-height: 1.5rem;
    font-size: 1.25rem;
    color: ${variables.lightGrey};
  }

  a {
    line-height: 1.5rem;
    font-size: 1.25rem;
    color: ${variables.lightGrey};
  }
`;

export {
  FooterContainer,
  RouteSection,
  RouteContainer,
  Route,
  FooterInfo,
}