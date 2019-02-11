import React from 'react';
import { ArticlePreview } from '../previews';

const WhatsNew = ({ newsStories }) => (
  <article>
    <h1>Whats New</h1>
      {
        newsStories.map(({ newsArticle }) => {
          return (
            <ArticlePreview
              key={newsArticle.slug}
              {...newsArticle}
            />
          )
        })
      }
  </article>
)

export default WhatsNew
