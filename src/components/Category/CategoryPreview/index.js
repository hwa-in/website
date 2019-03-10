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

const CategoryPreview = ({
  slug,
  categoryTitle,
  name,
  description,
  image,
  width,
}) => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt={categoryTitle} />
      </ImageContainer>
      <DetailsContainer width={width ? width : ""}>
        <Link to={`/products/${slug}`}> 
          <h3>{categoryTitle}</h3>
        </Link>
        <p>{description}</p>
        <MoreInfo onClick={() => navigate(`/products/${slug}`)}>
          <ReadMore>
            <FaAngleRight />
          </ReadMore>
        </MoreInfo>
      </DetailsContainer>
    </Wrapper>
  )
};

export default CategoryPreview;
