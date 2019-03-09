import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';
import Article from 'components/Article';
import {
  NewsSection,
  Articles,
} from 'styledComponents/pages/News';
import InfoSectionNav from 'components/InfoSectionNav';

const NewsPage = ({ data }) => {
  const { articles } = data.allContentfulNewsStory;
  console.log(articles)
  return (
    <Section noPadTop>
      <Section noPadBottom>
        <Container justifyCenter>
          <InfoSectionNav 
            sectionName="News"
          />
        </Container>
      </Section>
      <NewsSection>
        <Container>
          <h1>News</h1>
        </Container>
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