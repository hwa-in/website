import styled from 'styled-components';
import { variables, media } from 'style';

const Section = styled.div`
  margin: 0 auto;
  background: ${props => (props.dark ? variables.offWhite : variables.white)};
  max-width: ${props => props.inner ? '768px' : undefined};
  padding-top: ${props => props.noPadTop || props.noPad ? '0' : '60px'};
  padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '60px'};

  ${media.tablet`
    padding-top: ${props => props.noPadTop || props.noPad ? '0' : '60px'};
    padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '80px'};
  `}

  ${media.desktop`
    max-width: unset;
    padding-top: ${props => props.noPadTop || props.noPad ? '0' : '60px'};
    padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '120px'};
  `}
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


export { SplitBackgroundSection };
export default Section;
