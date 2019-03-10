import React, { Fragment } from 'react';
import ProductList from '../ProductList';
import { CategoryContainer, CategoryTitle } from './styles';
import CategoryPreview from './CategoryPreview';

class Category extends React.Component {
  state = {
    showProducts: false,
  }

  componentDidMount() {
    const { slug } = this.props
    if (slug === 'lazer-systems') {
      this.setState(() => ({
        lazerSystem: true,
      }))
    }
  }
  
  handleClick = () => {
    this.setState({
      showProducts: !this.state.showProducts,
    });
  }
  render() {
    const { categoryTitle, description, name, categoryImage, slug, products, subCategory } = this.props;
    const { showProducts, lazerSystem } = this.state;
    if (products.length) {
      return (
        <Fragment>
          <CategoryContainer>
              <CategoryPreview 
                slug={slug}
                categoryTitle={categoryTitle}
                name={name}
                description={description.description}
                image={categoryImage.fluid.src}
                lazerSystem={lazerSystem}
                showProducts={this.handleClick}
              />
          </CategoryContainer>
            <ProductList
              products={products}
              categorySlug={slug}
              showProducts={showProducts}
              closeList={this.handleClick}
              subCategory={subCategory}
            />
        </Fragment>
      )
    }
    return null
  }
}

export default Category;