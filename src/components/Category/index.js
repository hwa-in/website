import React, { Fragment } from 'react';
import Products from '../Products';
import { CategoryContainer } from './styles';
import CategoryPreview from './CategoryPreview';

class Category extends React.Component {
  state = {
    showProducts: false,
  }

  componentDidMount() {
    const { slug } = this.props
    // console.log(`Mounted ${this.props.name}`, this.props.products)
    if (slug === 'lazer-systems') {
      this.setState(() => ({
        lazerSystem: true,
      }))
    }
  }

  componentDidUpdate(prevProps, prevState) {

  }

  handleClick = () => {
    this.setState({
      showProducts: !this.state.showProducts,
    });
  }
  render() {
    const { categoryTitle, description, name, categoryImage, slug, products } = this.props;
    const { showProducts, lazerSystem } = this.state;
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
          <Products
            products={products}
            categorySlug={slug}
            showProducts={showProducts}
            closeList={this.handleClick}
            productPage={true}
          />
        </Fragment>
      )
    }
}

export default Category;