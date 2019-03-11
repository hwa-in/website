import styled from 'styled-components';
import { variables, media } from 'style';

const Container = styled.div`
  height: 600px;
  min-height: 600px;
  position: relative;
  display: block;
  background-image: url('${props => props.background}');
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: cover;
  transform: translateZ(0);
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
  left: 0
  width: 100%;
  bottom: -100px;
  left: 0;
  right: 0;
  height: 375px;

  ${media.tablet`
    bottom: -180px;
    height: 533px;
  `}

  ${media.desktop`
    bottom: -20px;
  `}
`;

const HeroContent = styled.div`
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 100;

  ${media.tablet`
    padding: 0;
    max-width: 720px;
  `}

  ${media.desktop`
    max-width: 960px;
  `}
`;

const HeroText = styled.div`
  flex: 0 0 100%;
  padding-top: 80px;
  max-width: 100%;
  ${media.tablet`
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
    padding-top: 150px;
  `}

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
  flex: 0 0 100%;
  max-width: 100%;

  ${media.tablet`
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  `}
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
