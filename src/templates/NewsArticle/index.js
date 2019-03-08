import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';
import {
  Header,
  Date,
  Body,
} from './styles';

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
    
        <Container>
          <div>
            <small>{dateWritten}</small>
            <h1>{title}</h1>
          </div>
          <div
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
        </Container>
  )
};

export default NewsArticleTemplate;

export const articleQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulNewsStory(slug: {eq: $slug}) {
      title
      dateWritten(formatString: "MMMM DD, YYYY"),
      description {
        description
      }
      image {
        fluid {
          src
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`