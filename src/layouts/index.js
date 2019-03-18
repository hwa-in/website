import React, { Fragment } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../style/normalize.scss';
import '../style/base.scss';
import "react-alice-carousel/lib/alice-carousel.css";

if (typeof window !== "undefined") {
  window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
}

const Layout = ({ children, location }) => (
  <Fragment>
    <Navbar location={location}/>
    {children}
    <Footer />
  </Fragment>
)

export default Layout;

