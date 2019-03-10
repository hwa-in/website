import React from 'react';
import { Link, navigate } from 'gatsby';
import { FaAngleRight } from 'react-icons/fa';
import { LearnMoreLink as LearnMore } from 'styledComponents/LearnMore';
import {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  MoreInfo,
  ReadMore,
} from './styles';

const CategoryPreview = ({
  slug,
  categoryTitle,
  name,
  description,
  image,
  lazerSystem,
  showProducts,
}) => {
  return (
    <Wrapper>
      <ImageContainer width={lazerSystem && "66%"}>
        <img src={image} alt={categoryTitle} />
      </ImageContainer>
      <DetailsContainer width={lazerSystem && "33%"}>
        <LearnMore to={`/products/${slug}`}>{name}</LearnMore>
        <h3 onClick={() => navigate(`/products/${slug}`)}>{categoryTitle}</h3>
        <p>{description}</p>
        <ReadMore onClick={() => showProducts()}>
          <FaAngleRight /> <span>{name}</span>
        </ReadMore>
      </DetailsContainer>
    </Wrapper>
  )
};

export default CategoryPreview;
