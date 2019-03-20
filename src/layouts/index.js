import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../style/normalize.scss'
import '../style/base.scss'
import 'react-alice-carousel/lib/alice-carousel.css'

if (typeof window !== 'undefined') {
  window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true
}

class Layout extends React.Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    })
  }
  render() {
    const { children, location } = this.props
    if (this.state.loaded) {
      return (
        <Fragment>
          <Navbar location={location} />
          {children}
          <Footer />
        </Fragment>
      )
    }
    return null
  }
}
export default Layout
