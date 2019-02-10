import React from 'react';
import { Link } from 'gatsby';



const NewsArticle = ({ dateWritten, slug, title }) => {
  return (
    <div>
      <Link to={`news/${slug}`}> 
        {title}<br/>{dateWritten}
      </Link>
    </div>
  )
}

const WhatsNew = ({ newsStories }) => (
  <article>
    <h1>Whats New</h1>
      {
        newsStories.map(({ newsArticle }) => {
          return (
            <NewsArticle 
              key={newsArticle.slug}
              {...newsArticle}
            />
          )
        })
      }
  </article>
)

export default WhatsNew
