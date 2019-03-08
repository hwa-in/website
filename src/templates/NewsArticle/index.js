import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';
import {
  Date,
  Header,
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
    description: {
      description,
    }
  } = data.contentfulNewsStory;
  console.log(data)
  return (
    <Section>
      <Container>
        <Date>
          <small>{dateWritten}</small>
        </Date>
        <Header>
          <h1>{title}</h1>
          <h2>Subtitle this is the subtitle subtitle</h2>
          <p>{description}</p>
        </Header>
        <Body
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
      </Container>
    </Section>
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