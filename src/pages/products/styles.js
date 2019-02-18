import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SkuWrapper = styled.div`
  pointer-events: none;
  z-index: -1;
  height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;

  &.skus-enter {
    opacity: 0.01;
    max-height: 0;
  }

  &.skus-enter-active {
    opacity: 1;
    max-height: 600px;
    height: auto;
    transition: all 300ms ease-in-out;
  }
  &.skus-enter-done {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.skus-exit {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.skus-exit-active {
    opacity: 0;
    max-height: 0;
    transition: all 300ms ease-in-out;
  }

  h2 {
    padding: 5px 30px 25px;
  }
`;

export {
  CategoryContainer,
  SkuWrapper,
};
