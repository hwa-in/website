import styled from 'styled-components';
import { Link } from 'gatsby';
import { variables } from 'style';

const NewProductWrapper = styled.article`
  width: 100%;
  margin: 0 auto;
  padding: 120px 0;
  background-color: ${variables.white};

  h1 {
    text-align: center;
    margin-bottom: 60px;
    color: ${variables.darkGreen};
  }

  .hiddenLink {
    height: 100%;
    width: 100%;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  position: relative;

  .alice-carousel__dots-item {
    background-color: ${variables.midGrey};
  }

  .alice-carousel__dots-item.__active {
    background-color: ${variables.darkGreen};
  }

  .alice-carousel__wrapper {
    height: 400px;
  }
`;

const CarouselButton = styled.button`
  background-color: #f5f7f9;
  color: ${variables.darkGreen};
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 6.25rem;
  width: 1.875rem;
  font-size: 1.5rem;
  padding: 0;
  transition: background-color .5s ease, color .5s ease;

  &.next{
    left: 0;
  }

  &.prev {
    right: 0;
  }

  &:hover {
    color: ${variables.white};
    background-color: ${variables.darkGreen};
  }

  &:focus {
    outline:0;
  }
`

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  width: 350px;
  height: 100%;
  position: relative;
`;


const ImgWrapper = styled.div`
  height: 200px;
  width: 100%;
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  height: 50%;
  width: 100%;
  display: block;
  padding: 1rem;
  margin-bottom: 3rem !important;

  h3 {
    font-weight: 900;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: .5rem;
    color: ${variables.darkGreen};
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    line-height: 1.375rem;
    color: ${variables.darkGrey};
    margin-bottom: 1.25rem;
    font-weight: 500;
  }
`;

const LearnMore = styled(Link)`
  position: absolute;
  bottom: 16px;
  background-color: ${variables.darkGreen};
  white-space: nowrap;
  font-size: 14px;
  width: 100px;
  text-align: center;
  padding: 2px 0;
  color: ${variables.white};
  border: 0;
  transition: background-color .5s ease, color .5s ease;
  

  &:hover {
    color: ${variables.darkGreen};
    background-color: ${variables.white};
  }
`;

export {
  NewProductWrapper,
  CarouselWrapper,
  CarouselButton,
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
  LearnMore,
};
