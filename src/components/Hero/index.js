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

const Hero = ({ id, background, heroProduct, title, superScript, subtitle }) => (
  <Container background={background}>
    <Spacer />
    <HeroContent>
      <HeroText>
        <p className="lazer-systems">{superScript}</p>
        <h1>{title}</h1>
        <p className="sub-title">{subtitle}</p>
        <LearnMore to="/products">Learn More</LearnMore>
      </HeroText>
      <ProductContainer>
        <img src={heroProduct}  alt="Lazer System"/>
      </ProductContainer>
    </HeroContent>
    <WaveContainer>
      <Waves />
    </WaveContainer>
  </Container>
);

Hero.propTypes = {
  children: PropTypes.array,
  imageFluid: PropTypes.object,
};

export default Hero;