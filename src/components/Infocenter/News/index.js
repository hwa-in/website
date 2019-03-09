import React from 'react';
import Article from 'components/Article';
import { H2 } from 'styledComponents/Header';

const News = ({newsStories}) => {
  return (
    <div>
      <H2>Latest News</H2>
      {
        newsStories.map(({article}) => (
          <Article key={article.slug} {...article} />
        ))
      }
    </div>
  )
};

export default News;