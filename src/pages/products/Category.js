import React from 'react';
import { Section } from 'styledComponents';
import Skus from './Skus';

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
      <Section noPadTop>
        <div onClick={() => this.handleClick() }>
          <h1>
            {name}
          </h1>
        </div>
        <Skus
          {...skus}
          productId={id} 
          showSkus={showSkus} 
        />
      </Section>
    )
  }
}

export default Category;