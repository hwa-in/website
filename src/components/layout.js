import React, { Fragment } from 'react'
import Navbar from './Navbar';
import base from './base.css';

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <Navbar />
        {children}
      </Fragment>
    )
  }
}

export default Template
