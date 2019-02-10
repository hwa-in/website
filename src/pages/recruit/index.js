import React from 'react';
import { graphql, Link } from 'gatsby';

const Recruit = (data) => {
  console.log("Recruit data", data)
  return (
    <div>
      Jobs
    </div>
  )
};

export default Recruit;

export const jobsquery = graphql`
  query AllJobsQuery {
    allContentfulJobs {
      edges {
        node {
          contentful_id
          jobTitle
          createdAt(formatString:"MMMM DD, YYYY")
          nature
          location
        }
      }
    }
  }
`;