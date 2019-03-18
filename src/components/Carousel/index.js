import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {
  CarouselWrapper,
  CarouselButton,
} from './styles';

class Carousel extends React.Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  padding = {
    paddingLeft: '5%',
    paddingRight: '5%',
  }

  render() {
    const items = this.props.products;
    return (
      <CarouselWrapper>
        <CarouselButton 
          className="prev"
          onClick={() => this.Carousel._slidePrev()}
        >
        &gt;
        </CarouselButton>
        <AliceCarousel
          items={items}
          duration={400}
          autoPlay={false}
          infinite={true}
          fadeOutAnimation={true}          
          autoPlayInterval={3000}
          autoPlayDirection="rtl"
          disableAutoPlayOnAction={true}
          stopAutoPlayOnHover={true}
          buttonsDisabled={true}
          dotsDisabled={true}
          ref={ el => this.Carousel = el }
          stagePadding={this.padding}
          responsive={this.responsive}
        />
        <CarouselButton 
          className="next"
          onClick={() => this.Carousel._slideNext()}
        >
        &lt;
        </CarouselButton>
      </CarouselWrapper> 
    )
  }
}

export default Carousel;
