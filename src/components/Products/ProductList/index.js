import React, { Fragment } from 'react';
import Carousel from 'components/Carousel';
import ProductCard from '../ProductCard';

class ProductList extends React.Component {
  showItems(categorySlug) {
    const { products, productPage } = this.props
    if (products[0].node) {
      return products.map(({node}, index ) => {
          return <ProductCard key={index} {...node} />
      }) 
    } else {
      return products.map((product, index ) => {
        return <ProductCard 
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
