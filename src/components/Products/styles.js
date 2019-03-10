import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  margin: -4rem 0 4rem;

  &.products-enter {
    opacity: 0.01;
    max-height: 0;
  }

  &.products-enter-active {
    opacity: 1;
    max-height: 600px;
    height: auto;
    transition: all 300ms ease-in-out;
  }
  &.products-enter-done {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.products-exit {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.products-exit-active {
    opacity: 0;
    max-height: 0;
    transition: all 300ms ease-in-out;
  }

  h2 {
    padding: 5px 30px 25px;
  }
`;

const Close = styled.span`
  position: absolute;
  top: .5rem;
  right: .5rem;
  width: 2.75rem;
  height: 2.75rem;
  color: #3094b4;
  font-size: 3rem;
  line-height: 2rem;
  text-align: center;
  font-weight: 100;
  cursor: pointer;
  z-index: 1;
`;

const Slider = styled.div`
  height: 100%;
  padding: 3rem 0;
`

export {
  Wrapper,
  Close,
  Slider,
};
