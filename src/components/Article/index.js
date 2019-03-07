import React from 'react';
import { Link, navigate } from 'gatsby';
import { FaAngleRight } from 'react-icons/fa';
import {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  MoreInfo,
  ReadMore,
} from './styles';

const Article = ({
  slug,
  title,
  dateWritten,
  description: {
    description
  },
  image: {
    fluid: {
      src
    }
  }
}) => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={src} alt={title} />
      </ImageContainer>
      <DetailsContainer>
        <Link to={`news/${slug}`}> 
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <MoreInfo onClick={() => navigate(`/news/${slug}/`)}>
          <small>{dateWritten}</small>
          <ReadMore>
            <FaAngleRight />
          </ReadMore>
        </MoreInfo>
      </DetailsContainer>
    </Wrapper>
  )
};

export default Article;
