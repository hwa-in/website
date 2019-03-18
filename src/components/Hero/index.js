import React from 'react';
import PropTypes from 'prop-types';
import { LearnMore } from 'styledComponents';
import {
  Container,
  ImageContainer,
  Background,
  HeroContent,
  Spacer,
  HeroText,
  ProductContainer,
  ProductImage,
} from './styles';

class Hero extends React.Component {

  componentDidMount() {
    if (typeof window !== 'undefined'){
      this.forceUpdate();
    }
  }
  render () {
    const { background, heroProduct, title, superScript, subtitle } = this.props;
    return (
      <Container>
        <ImageContainer>
          <Background fluid={background} />
        </ImageContainer>
        <Spacer />
        <HeroContent>
          <HeroText>
            <p className="lazer-systems">{superScript}</p>
            <h1>{title}</h1>
            <p className="sub-title">{subtitle}</p>
            <LearnMore to="/products">Learn More</LearnMore>
          </HeroText>
          <ProductContainer>
            <ProductImage fluid={heroProduct}  alt="Lazer System"/>
          </ProductContainer>
        </HeroContent>
        {/* <WaveContainer>
          <Waves />
        </WaveContainer> */}
      </Container>
    )
  }
}

Hero.propTypes = {
  children: PropTypes.array,
  imageFluid: PropTypes.object,
};

export default Hero;