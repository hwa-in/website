import styled from 'styled-components';
import { variables, } from 'style';

const Container = styled.div`
  height: 600px;
  min-height: 600px;
  position: relative;
  display: block;
  background-image: url('${props => props.background}');
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: cover;
`;

const Spacer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 90;
`;

const WaveContainer = styled.div`
  position: absolute;
  z-index: 20;
  bottom: -20px;
  left: 0
  width: 100%;
  height: 533px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 960px;
  height: 600px;
  margin: 0 auto;
`;

const HeroText = styled.div`
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
  padding-top: 150px;

  h1 {
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.375rem;
    margin-bottom: 1.5rem;
    color: ${variables.darkGreen};
    text-transform: uppercase;
  }

  .lazer-systems {
    font-weight: 500;
    font-size: .75rem;
  }

  .sub-title {
    font-size: 1rem;
    line-height: 1.375rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 300;
  }
`;


const ProductContainer = styled.div`
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
  position: relative;

  img {
    position: absolute;
    bottom: 0;
    z-index: 100;
  }
`;


export {
  Container,
  WaveContainer,
  Spacer,
  HeroContent,
  HeroText,
  ProductContainer,
};
