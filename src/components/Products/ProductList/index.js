import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';
import { StaticQuery, graphql } from 'gatsby'
import {
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
  LearnMore,
  CarouselWrapper,
  CarouselButton,
} from './styles';

const Product = (product) => {
  const { category, slug, title, imagePreview: {fluid}} = product
  return (
    <ProductContainer>
      <ImgWrapper>
        <ProductImg src={fluid.src} alt={title}/>
      </ImgWrapper>
      <ProductInfo>
        <h3>{title}</h3>
        
    </ProductInfo>
  </ProductContainer>
  )
}

Product.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  imagePreview: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
}

class ProductList extends React.Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  showItems() {
    const { products } = this.props
    console.log(products[0].node)
    if (products[0].node) {
      return products.map(({node}, index ) => {
          return <Product key={index} {...node}/>
      }) 
    } else {
      return products.map((product, index ) => {
        return <Product key={index} {...product}/>
    }) 
    }
  }

  render() {
    const { products } = this.props
    const items = this.showItems()
    return (
      <div>
        Products
        {
          products &&
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
        }
      </div>
    )
  }
}

export default ProductList;
