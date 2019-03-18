import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import {
  NavList,
  NavItem,
} from './styles';

const JobSectionNav = ({ jobId, jobName }) => {
  return (
    <NavList>
      <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem>></NavItem>
      {
        jobName ? 
          <Fragment>
            <NavItem><Link to="/recruit">Jobs</Link></NavItem>
            <NavItem>></NavItem>
            <NavItem className="active"><Link to={`/recruit/${jobId}/`}>{jobName}</Link></NavItem>
          </Fragment>
          : 
          <NavItem className="active">Jobs</NavItem>
      }
    </NavList>
  )
};

export default JobSectionNav;