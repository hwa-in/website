import React from 'react';
import { Link } from 'gatsby';
import { FaList } from 'react-icons/fa';
import {
  NewsSection,
  HeaderSection,
  Title,
  ViewAll,
  NewsContainer,
  NewsCard,
  ImageContainer,
  NewsImage,
  NewsContent,
} from './styles';

const NewsArticle = ({
  slug,
  title,
  dateWritten,
  description: {
    description,
  },
  image: {
    fluid: {
      src,
    },
  },
}) => {
  return (
    <NewsCard>
      <ImageContainer>
        <NewsImage src={src} />
      </ImageContainer>
      <NewsContent>
        <Link className="title-link" to={`/news/${slug}`}>
          <h4>{title}</h4>
        </Link>
        <p className="description">{description}</p>
      </NewsContent>
    </NewsCard>
  )
}

const WhatsNew = ({ newsStories }) => (
  <NewsSection>
    <HeaderSection>
      <Title><h2>Latest News</h2></Title>
      <ViewAll>
          <Link className="events-btn" to="/news"><FaList /> News</Link>
        </ViewAll>
    </HeaderSection>
    <NewsContainer>
    {
      newsStories.map(({ newsArticle }) => (
        <NewsArticle
          key={newsArticle.slug}
          {...newsArticle} 
        />
      ))
    }
    </NewsContainer>
  </NewsSection>
)

export default WhatsNew
