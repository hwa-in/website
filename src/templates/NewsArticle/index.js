import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Section from '../../components/styledComponents/Section';
import Container from '../../components/styledComponents/Container';

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
    <Fragment>
      <Section>
        <Container style={{flexDirection: 'column'}}>
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
    </Fragment>
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