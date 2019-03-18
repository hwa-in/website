import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { graphql } from 'gatsby';
import { JobPreview } from 'components/previews';
import JobSectionNav from 'components/JobSectionNav';

const RecruitPage = ({ data }) => {
  const { jobs } = data.allContentfulJobs;
  return (
    <Fragment>
      <Section noPadBottom>
        <Container justifyCenter>
          <JobSectionNav />
        </Container>
      </Section>
      <Section>
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
      </Section>
    </Fragment>
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