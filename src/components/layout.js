import React from 'react'
import Container from './styledComponents/Container';
import Navbar from './Navbar';
import base from './base.css';

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
