import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.width || undefined};
  max-width: ${props => props.width || undefined};
  margin: 0 auto;
`


export default ({ children }) => (
  <Container>
    {children}
  </Container>
)
