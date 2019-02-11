import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Section from '../../components/styledComponents/Section';
import Container from '../../components/styledComponents/Container';
import { ArticlePreview } from '../../components/previews';

const NewsPage = ({ data }) => {
  const { articles } = data.allContentfulNewsStory;
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