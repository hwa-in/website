import React from 'react';

const FeaturedArticle = ({article}) => {
  if (typeof article !== 'undefined') {
    const {newsArticle: {slug, dateWritten, title, description: {description }}} = article;
    return (
      <div>
        FeaturedArticl
      </div>
    )
  }
  return <div>Loadi</div>
};

export default FeaturedArticle;