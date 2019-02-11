import React from 'react';
import { graphql } from 'gatsby';
import Section from '../../components/styledComponents/Section';
import { Wrapper } from './styles';

const AboutPage = ({ data }) => {
  const { html } = data.contentfulAboutPage.description.childMarkdownRemark;
  return (
    <Section>
      <Wrapper
      dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Section>
  )
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageContent {
    contentfulAboutPage(contentful_id: {eq: "2ZKjnM3pHyBLIISnrswx4A"}) {
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
