import React from 'react';
import PropTypes from 'prop-types';
import { LearnMore } from 'styledComponents';
import {
  Container,
  HeroContent,
  Spacer,
  HeroText,
  ProductContainer,
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