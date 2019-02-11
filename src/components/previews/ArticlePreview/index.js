import React from 'react';
import { Link } from 'gatsby';

const ArticlePreview = ({ dateWritten, slug, title }) => {
  return (
    <div>
      <Link to={`news/${slug}`}> 
        {title}<br/>{dateWritten}
      </Link>
    </div>
  )
};

export default ArticlePreview