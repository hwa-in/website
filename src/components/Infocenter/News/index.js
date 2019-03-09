import React from 'react';
import Article from 'components/Article';
import { ViewAll } from 'styledComponents/Button';
import { H2 } from 'styledComponents/Header';
import styled from 'styled-components';

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const News = ({newsStories}) => {
  return (
    <div>
      <HeaderSection>
        <H2>Latest News</H2>
        <ViewAll to="/infocenter/news" text="All" light/>
      </HeaderSection>
      {
        newsStories.map(({article}) => (
          <Article 
            key={article.slug}
            {...article} 
            width="50%"
          />
        ))
      }
    </div>
  )
};

export default News;