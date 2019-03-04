import React, { Fragment } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../style/normalize.scss';
import '../style/base.scss';
import "react-alice-carousel/lib/alice-carousel.css";

const Layout = ({ children, location }) => (
  <Fragment>
    <Navbar location={location}/>
    {children}
    <Footer />
  </Fragment>
)

export default Layout;

