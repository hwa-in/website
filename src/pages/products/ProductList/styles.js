import styled from 'styled-components';

const SkuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  display: flex;
  justify-content: space-around;
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

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 1.75rem;
    height: 1.75rem;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-bottom: 1.75rem solid #f5f7f9;
    transition: all .5s ease;
    opacity: 0;
  }
`;

const SkuContainer = styled.div`
  position: relative;
  background-color: #f5f7f9;
  width: 100%;
  height: 100%;
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

const SkuSlider = styled.div`
  height: 100%;
  padding: 3rem 0;
`

export {
  SkuWrapper,
  SkuContainer,
  Close,
  SkuSlider,
};
