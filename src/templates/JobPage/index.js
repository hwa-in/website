import React, { Fragment } from 'react';
import { Section, Container } from 'styledComponents';
import { graphql } from 'gatsby';
import JobSectionNav from 'components/JobSectionNav';
import LearnMore from 'styledComponents/LearnMore';
import {
  Wrapper,
  Header,
  Details,
  Content,
  MoreInfo,
} from './styles';

const JobPostTemplate = ({data, pageContext}) => {
  const {
    jobTitle,
    createdAt,
    location, 
    nature,
    experience,
    education,
    jobDescription: {
      childMarkdownRemark: {
        html,
      },
    },
  } = data.contentfulJobs;
  const { id } = pageContext;
  return (
    <Fragment>
      <Section>
        <Container justifyCenter>
          <JobSectionNav
            jobName={jobTitle}
            jobId={id}
          />
        </Container>
      </Section>
      <Wrapper>
        <Header>
          <h1>{jobTitle}</h1>
          <small>Posted {createdAt}</small>
          <MoreInfo>
            <LearnMore to={`/contact`} state={{jobId: id, jobTitle: jobTitle}}>Apply Now</LearnMore>
          </MoreInfo>
        </Header>
        <Details>
          <h2>Details</h2>
          <ul>
            <li>Job Type: {nature}</li>
            <li>Location: {location}</li>
            <li>Preferred Qualifications: {experience}</li>
            <li>Education Experience: {education}</li>
          </ul>
        </Details>
        <Content>
          <h2>Job Description</h2>
          <div dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </Content>
        <MoreInfo>
            <LearnMore to={`/contact`} state={{jobId: id, jobTitle: jobTitle}}>Apply Now</LearnMore>
          </MoreInfo>
      </Wrapper>
    </Fragment>
  )
};

export default JobPostTemplate;

export const pageQuery = graphql`
  query JobPostById($id: String!) {
    contentfulJobs(contentful_id: { eq: $id }) {
      jobTitle
      createdAt(formatString:"MMMM DD, YYYY")
      location
      nature
      experience
      education
      jobDescription {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`