import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import Carousel from 'components/Carousel';
import {
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
  LearnMore,
} from './styles';

const Product = (product) => {
  const { category, slug, title, imagePreview: {fluid}, description} = product
  console.log(category)
  return (
    <ProductContainer>
      <ImgWrapper>
        <ProductImg src={fluid.src} alt={title}/>
      </ImgWrapper>
      <ProductInfo>
        <Link to={`/products/${category.slug}/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description.description}</p>
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
  slug: PropTypes.string.isRequired,
}

class ProductList extends React.Component {
  showItems() {
    const { products, categorySlug } = this.props
    if (products[0].node) {
      return products.map(({node}, index ) => {
          return <Product key={index} {...node} />
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
      <Fragment>
        {
          products &&
          <Carousel products={items} />
        }
      </Fragment>
    )
  }
}

export default ProductList;
