import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  variables,
} from 'style';

const defaultLearnMore = () => `
  white-space: nowrap;
  background-color: ${variables.darkGreen};
  color: ${variables.white};
  text-align: center;
  border-bottom: 0;
  border-radius: 2px;
  padding: .25rem .75rem;
  transition: background-color .5s ease, color .5s ease;
  text-decoration: none;

  :hover {
    color: ${variables.darkGreen};
    background-color: ${variables.white};
  }

  :focus {
    outline: none;
  }
`;

const LearnMoreLink = styled.a`
  ${props => defaultLearnMore()}
  font-size: 12px;
  line-height: .9rem;
  font-weight: 100;
`;

const LearnMore = styled(Link)`
  ${props => defaultLearnMore()}
  font-size: 14px;
  line-height: 1.5;
`;

export { LearnMoreLink };
export default LearnMore;