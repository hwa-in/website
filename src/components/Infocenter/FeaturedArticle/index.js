import React from 'react';
import { Section } from 'styledComponents';
import { Link, navigate } from 'gatsby';
import { FaAngleRight } from 'react-icons/fa';
import {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  ReadMore,
} from './styles';

const FeaturedArticle = ({
  slug,
  title, 
  dateWritten,
  description: { 
    description 
  }, 
  image: { 
    fluid: {
      src,
    },
  }
}) => { 
  return (
    <Section
      dark
      noPadTop
      padBottom="2rem"
    >
      <Wrapper onClick={() => navigate(`infocenter/news/${slug}/`)}>
        <ImageContainer>
          <img src={src} alt={title} />
        </ImageContainer>
        <DetailsContainer>
          <small>{dateWritten}</small>
          <Link to={`/infocenter/news/${slug}`}> 
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
        </DetailsContainer>
        <ReadMore>
          <FaAngleRight />
        </ReadMore>
      </Wrapper>
    </Section>
  )
}

export default FeaturedArticle;