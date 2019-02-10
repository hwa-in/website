import React, { Fragment } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../style/normalize.scss';
import '../style/base.scss';

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
)

export default Layout;

