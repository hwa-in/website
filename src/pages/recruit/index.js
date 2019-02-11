import React from 'react';
import { graphql } from 'gatsby';
import { JobPreview } from '../../components/previews';

const RecruitPage = ({ data }) => {
  const { jobs } = data.allContentfulJobs;
  return (
    <div>
      {
        jobs.map(({ job }) => {
          return (
            <JobPreview
              key={job.contentful_id}
              {...job}
            />
          )
        })
      }
    </div>
  )
};

export default RecruitPage;

export const jobsquery = graphql`
  query AllJobsQuery {
    allContentfulJobs {
      jobs: edges {
        job: node {
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