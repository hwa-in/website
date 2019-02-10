import React from 'react';
import styled from 'styled-components';
import { media } from '../../../style';

const Container = styled.div`
  width: ${props => props.width || '90%'};
  max-width: ${props => props.maxWidth || '335px'};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${media.tablet`
    width: 85%;
    max-width: 690px;
    flex-direction: row;
  `}

  ${media.desktop`
    width: 80%;
    max-width: 1080px;
  `}
`;

export default ({ children }) => (
  <Container>
    {children}
  </Container>
)
