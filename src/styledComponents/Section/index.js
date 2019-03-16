import styled from 'styled-components';
import { variables, media } from 'style';

const Section = styled.div`
  margin: 0 auto;
  width: 100%;
  background: ${props => (props.dark ? variables.offWhite : variables.white)};
  padding-top: ${props => props.noPadTop || props.noPad ? '0' : '60px'};
  padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '60px'};
  padding-top: ${props => props.padTop ? props.padTop : undefined};
  padding-Bottom: ${props => props.padBottom ? props.padBottom : undefined};
  padding: ${props => props.pad ? props.pad : undefined};

  ${media.tablet`
    padding-top: ${props => props.noPadTop || props.noPad ? '0' : '60px'};
    padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '80px'};
    padding-top: ${props => props.padTop ? props.padTop : undefined};
    padding-Bottom: ${props => props.padBottom ? props.padBottom : undefined};
    padding: ${props => props.pad ? props.pad : undefined};
  `}
`;

export default Section;
