import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';
import InfoSectionNav from 'components/InfoSectionNav';
import {
  Date,
  Header,
  Body,
} from './styles';

const NewsArticleTemplate = ({data}) => {
  const {
    dateWritten,
    title,
    slug,
    content: {
      childMarkdownRemark: {
        html,
      },
    },
    description: {
      description,
    }
  } = data.contentfulNewsStory;
  return (
    <Section>
      <Section noPadTop>
        <Container justifyCenter>
          <InfoSectionNav 
            sectionName="News"
            sectionSlug="news"
            pageSlug={slug}
            pageName={title}
          />
        </Container>
      </Section>
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
      slug
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