import React from 'react';
import { graphql } from 'gatsby';
import { Section } from 'styledComponents';
import Article from 'components/Article';
import {
  NewsSection,
  Articles,
} from 'styledComponents/pages/News';

const NewsPage = ({ data }) => {
  const { articles } = data.allContentfulNewsStory;
  console.log(articles)
  return (
    <Section>
      <NewsSection>
        <h1>News</h1>
      </NewsSection>
      <Section dark>
        <Articles>
        {
          articles.map(({article}, index) => (
            <Article
              key={index}
              {...article}
            />
          ))
        }
        </Articles>
      </Section>
    </Section>
  )
};

export default NewsPage;

export const articleQuery = graphql`
  query AllArticles {
    allContentfulNewsStory {
      articles: edges {
        article: node {
          slug
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
        }
      }
    }
  }
`