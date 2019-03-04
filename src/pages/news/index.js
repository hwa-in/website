import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';
import { ArticlePreview } from 'components/previews';

const NewsPage = ({ data }) => {
  const { articles } = data.allContentfulNewsStory;
  console.log(articles)
  return (
    <Fragment>
      <Section>
        News Page
        <Container>
        {
          articles.map(({article}, index) => {
            console.log(article)
            return (
              <ArticlePreview
              key={index}
              {...article}
              />
            )
          })
        }
        </Container>
      </Section>
    </Fragment>
  )
};

export default NewsPage;

export const articleQuery = graphql`
  query AllArticles {
    allContentfulNewsStory {
      articles: edges {
        article: node {
          slug,
          title,
          dateWritten,
        }
      }
    }
  }
`