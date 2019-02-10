import styled from 'styled-components';
import variables from '../../../style/variables.js';


const Section = styled.div`
  margin: 0 auto;
  background: ${props => (props.dark ? variables.lightGrey : variables.white)};
  max-width: ${props => props.inner ? '768px' : undefined};
  padding-top: ${props => props.noPadTop || props.noPad ? '0' : '60px'};
  padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '60px'};
  @media (min-width: 768px) {
    padding-top: ${props => props.noPadTop || props.noPad ? '0' : '80px'};
    padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '80px'};
  }
  @media (min-width: 1280px) {
    max-width: unset;
    padding-top: ${props => props.noPadTop || props.noPad ? '0' : '120px'};
    padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '120px'};
  }
`;

const SplitBackgroundSection = styled(Section)`
  @media(max-width: 1279px) {
    padding-top: 0;
  }
  background: linear-gradient(to bottom,
    ${props => variables[props.top]} 0%,
    ${props => variables[props.top]} 50%,
    ${props => variables[props.bottom]} 50%,
    ${props => variables[props.bottom]} 100%);
`;

const TestimonialsSection = styled.div`
  background: white;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 80px;
    background: linear-gradient(to bottom,
      ${variables.white} 0%,
      ${variables.white} 150px,
      ${variables.lightGrey} 150px,
      ${variables.lightGrey} 100%);
  }

  @media (min-width: 1280px) {
    padding-top: 0;
    padding-bottom: unset;
    background: linear-gradient(to bottom,
      ${variables.white} 0%,
      ${variables.white} 250px,
      ${variables.lightGrey} 250px,
      ${variables.lightGrey} 100%);
  }
`;

export { SplitBackgroundSection, TestimonialsSection };
export default Section;
