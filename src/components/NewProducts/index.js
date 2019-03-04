import React from 'react';
import { Link } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';

import {
  NewProductWrapper,
  CarouselWrapper,
  CarouselButton,
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
  LearnMore,
} from './styles';

class NewProducts extends React.Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  products = () => {
    const { products } = this.props;
    return products.map(({product}) => {
      const {category, id, slug, title, description: {description}, imagePreview: {fluid}} = product;
      return (
        <Link  className="hiddenLink" to={`products/${category.slug}/${slug}`}>
          <ProductContainer key={id}>
            <ImgWrapper>
              <ProductImg src={fluid.src} alt={title}/>
            </ImgWrapper>
            <ProductInfo>
              <h3>{title}</h3>
              <p>{description}</p>
              <LearnMore to={`products/${category.slug}/${slug}`}>Learn More</LearnMore>
            </ProductInfo>
          </ProductContainer>
        </Link>
      )
    })
  }

  render() {
    const items = this.products()
    return (
      <NewProductWrapper>
        <h1>New Products</h1>
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
      </NewProductWrapper>
    )
  }
}

export default NewProducts;
