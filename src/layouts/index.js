import React, { Fragment } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../style/normalize.scss';
import '../style/base.scss';

const Layout = ({ children, location }) => (
  <Fragment>
    <Navbar location={location}/>
    {children}
    <Footer />
  </Fragment>
)

export default Layout;

