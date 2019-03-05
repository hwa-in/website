import React from 'react';
import PropTypes from 'prop-types';
import { LearnMore } from 'styledComponents';
import {
  Container,
  WaveContainer,
  HeroContent,
  Spacer,
  HeroText,
  ProductContainer,
} from './styles';
import Waves from '../Waves';

const Hero = ({ children, background, heroProduct }) => (
  <Container background={background}>
    <WaveContainer>
      <Waves />
    </WaveContainer>
    <Spacer />
    <HeroContent>
      <HeroText>
        <p className="lazer-systems">Lazer Systems</p>
        <h1>HWA-IN Products</h1>
        <p className="sub-title">The peak of performance.</p>
        <LearnMore to="/products">Learn More</LearnMore>
      </HeroText>
      <ProductContainer>
        <img src={heroProduct}  alt="Lazer System"/>
      </ProductContainer>
    </HeroContent>
  </Container>
);

Hero.propTypes = {
  children: PropTypes.array,
  imageFluid: PropTypes.object,
};

export default Hero;