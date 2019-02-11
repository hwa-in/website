import React from 'react';
import { graphql, navigate } from 'gatsby';
import {
  Wrapper,
  Header,
  Details,
  Content
} from './styles';

const JobPostTemplate = (data) => {
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
  } = data.data.contentfulJobs;
  console.log(data)
  return (
    <Wrapper>
      <Header>
        <button 
          onClick={ () => navigate('/recruit')}
          role="link"
          tabIndex="0"
        >
          Go Back
        </button>
        <h1>{jobTitle}</h1>
        <small>Posted {createdAt}</small>
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
    </Wrapper>
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