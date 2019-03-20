import styled from 'styled-components';
import Img from 'gatsby-image';
import { variables } from 'style';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${variables.white};
  margin: 50px 0 4rem;
  padding: 0 1rem;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: row;
    min-height: 400px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: 990px) {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
`;

const CategoryImage = styled(Img)`
  width: 100%;
  height: 100%;
  img {
    object-fit: contain !important;
  }
`;

const DetailsContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  justify-content: center;

  h1 {
    font-size: 2rem;
    line-height: 2.25rem;
    color: ${variables.darkGreen};
    font-weight: 400;
    margin: .5rem 0 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: ${variables.midGrey};
  }

  p {
    margin-bottom: 1.25rem;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (min-width: 990px) {
    width: 50%;

    h1 {
      font-size: 3rem;
      line-height: 3.375rem;
    }
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductImage = styled(Img)`
  img {
    object-fit: contain !important;
    padding: 1rem;
  }
`;

export {
  Wrapper,
  ImageContainer,
  CategoryImage,
  DetailsContainer,
  ProductsWrapper,
  ProductImage,
};
