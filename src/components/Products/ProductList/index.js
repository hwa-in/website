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
  const { category, slug, title, imagePreview: {fluid}, description, productPage, categorySlug} = product
  let catSlug;
  if (categorySlug) {
    catSlug = categorySlug;
  } else {
    let cat = category.filter(c => c.slug !== "lazer-systems");
    catSlug = cat[0].slug
  }
  return (
    <ProductContainer background={productPage && true}>
      <ImgWrapper>
        <ProductImg src={fluid.src} alt={title}/>
      </ImgWrapper>
      <ProductInfo>
        <Link to={`/products/${catSlug}/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description.description}</p>
        <LearnMore to={`/products/${catSlug}/${slug}`}>Learn More</LearnMore>
    </ProductInfo>
  </ProductContainer>
  )
}

Product.propTypes = {
  category: PropTypes.array,
  title: PropTypes.string.isRequired,
  imagePreview: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

class ProductList extends React.Component {
  showItems(categorySlug) {
    const { products, productPage } = this.props
    if (products[0].node) {
      return products.map(({node}, index ) => {
          return <Product key={index} {...node} />
      }) 
    } else {
      return products.map((product, index ) => {
        return <Product 
          key={index} 
          {...product} 
          productPage={productPage}
          categorySlug={categorySlug}
        />
    }) 
    }
  }

  render() {
    const { products, categorySlug } = this.props
    const items = this.showItems(categorySlug)
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
