import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types';
import { Container, HeroContent } from './styles';

const Hero = ({ children, imageFluid }) => (
  <Container>
    <Img fluid={imageFluid} />
    <HeroContent>
      {children}
    </HeroContent>
  </Container>
);

Hero.propTypes = {
  children: PropTypes.array,
  imageFluid: PropTypes.object,
};

export default Hero;