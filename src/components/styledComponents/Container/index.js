import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`


export default ({ children }) => (
  <Container>
    {children}
  </Container>
)
