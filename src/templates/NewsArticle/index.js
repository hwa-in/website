import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';

const NewsArticleTemplate = ({data}) => {
  const {
    dateWritten,
    title,
    content: {
      childMarkdownRemark: {
        html,
      },
    },
  } = data.contentfulNewsStory;
  console.log(data)
  return (
    <Section>
      <Section noPadBottom>
        <Container>
          <div>
            <h1>{title}</h1>
            <small>{dateWritten}</small>
          </div>
          <div
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
        </Container>
      </Section>
    </Section>
  )
};

export default NewsArticleTemplate;

export const articleQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulNewsStory(slug: {eq: $slug}) {
      title
      dateWritten(formatString: "MMMM DD, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`