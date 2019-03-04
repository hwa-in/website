import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Section } from 'styledComponents';
import { Wrapper } from './styles';

const AboutPage = ({ data }) => {
  const { html } = data.contentfulAboutPage.description.childMarkdownRemark;
  return (
    <Fragment>
      <Section>
        <Wrapper
        dangerouslySetInnerHTML={{
          __html: html,
        }}
        />
      </Section>
    </Fragment>
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
