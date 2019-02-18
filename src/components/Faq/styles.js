import styled from 'styled-components';
import { variables } from 'style';

const FaqStyleContainer = styled.div`
  transition: background-color 0.2s linear;
  overflow: hidden;
  &:hover {
    background-color: ${variables.darkWhiteSmoke};
    cursor: pointer;
  }
`;

const FaqStyleTitle = styled.div`
  h2 {
    font-weight: bold;
    font-size: 18px;
  }
  margin: 0;
  padding: 15px 20px;
`;

const FaqStyleContent = styled.div`
  pointer-events: none;
  z-index: -1;
  height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;

  &.answer-enter {
    opacity: 0.01;
    max-height: 0;
  }

  &.answer-enter-active {
    opacity: 1;
    max-height:600px;
    height: auto;
    transition: all 300ms ease-in-out;
  }
  &.answer-enter-done {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.answer-exit {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.answer-exit-active {
    opacity: 0;
    max-height: 0;
    transition: all 300ms ease-in-out;
  }

  p {
    padding: 5px 30px 25px;
  }
`;

export {
  FaqStyleContainer, 
  FaqStyleTitle, 
  FaqStyleContent
};