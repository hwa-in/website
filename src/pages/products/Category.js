import React from 'react';
import Skus from './Skus';
import { CategoryContainer, CategoryTitle } from './styles';

class Category extends React.Component {
  state = {
    showSkus: false,
  }
  
  handleClick = () => {
    this.setState({
      showSkus: !this.state.showSkus,
    });
  }

  render() {
    const { name, id, skus } = this.props;
    const { showSkus } = this.state;
    return (
      <CategoryContainer>
        <CategoryTitle onClick={() => this.handleClick() }>
          {name}
        </CategoryTitle>
        <Skus
          {...skus}
          productId={id} 
          showSkus={showSkus} 
        />
      </CategoryContainer>
    )
  }
}

export default Category;