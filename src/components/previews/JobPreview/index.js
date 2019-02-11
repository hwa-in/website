import React from 'react';
import { Link } from 'gatsby';
import {
  JobContainer,
  JobContent,
  JobDetails,
} from './styles';

const JobPreview = ({ contentful_id, jobTitle, createdAt, nature, location }) => (
  <Link to={`/recruit/${contentful_id}`}>
    <JobContainer>
      <JobContent> 
        <h3>{jobTitle}</h3>
        <small>Posted on {createdAt}</small>
      </JobContent>
      <JobDetails>
        <p>{nature}</p>
        <p>{location}</p>
      </JobDetails>
    </JobContainer>
  </Link>
);

export default JobPreview;
