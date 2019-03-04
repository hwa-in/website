import React from 'react';
import ProductList from '../ProductList';
import { CategoryContainer, CategoryTitle } from './styles';

class Category extends React.Component {
  state = {
    showProducts: false,
  }
  
  handleClick = () => {
    this.setState({
      showProducts: !this.state.showProducts,
    });
  }
  render() {
    const { categoryTitle, slug, products, subCategory } = this.props;
    const { showProducts } = this.state;
    if (products.length) {
      return (
        <CategoryContainer>
          <CategoryTitle onClick={() => this.handleClick() }>
            {categoryTitle}
          </CategoryTitle>
            <ProductList
            products={products}
            categorySlug={slug}
            showProducts={showProducts}
            closeList={this.handleClick}
            subCategory={subCategory}
            />
        </CategoryContainer>
      )
    }
    return null
  }
}

export default Category;