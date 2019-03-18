import styled from 'styled-components';
import { media } from 'style';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '335px'};
  margin: 0 auto;
  display: flex;
  flex-direction:  ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justifyCenter ? 'center' : 'space-between'};

  ${media.tablet`
    max-width: 720px;
  `}

  @media (min-width: 992px) {
    max-width: 960px;
  }

  ${media.desktop`
    max-width: 1180px;
  `}
`;

export default Container;
