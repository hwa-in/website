import styled from 'styled-components';
import { variables } from 'style';

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
    height: 450px;
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
  z-index: 1;
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
`;

export {
  CarouselWrapper,
  CarouselButton,
};
