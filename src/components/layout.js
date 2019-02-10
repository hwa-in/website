import React from 'react'
import Container from './Container';
import Navbar from './Navbar';

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        <Navbar />
        {children}
      </Container>
    )
  }
}

export default Template
