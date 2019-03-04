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
    const { categoryTitle, slug, products } = this.props;
    const { showProducts } = this.state;
    return (
      <CategoryContainer>
        <CategoryTitle onClick={() => this.handleClick() }>
          {categoryTitle}
        </CategoryTitle>
        <ProductList
          products={products}
          categoryId={slug}
          showProducts={showProducts}
          closeList={this.handleClick}
        />
      </CategoryContainer>
    )
  }
}

export default Category;