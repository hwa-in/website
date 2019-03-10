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
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          autoPlayInterval={3000}
          autoPlayDirection="rtl"
          responsive={this.responsive}
          disableAutoPlayOnAction={true}
          stopAutoPlayOnHover={true}
          buttonsDisabled={true}
          dotsDisabled={true}
          ref={ el => this.Carousel = el }
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
