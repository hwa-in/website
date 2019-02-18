import React from 'react';
import { Section } from '../../components/styledComponents';
import Skus from './Skus';

class ProductContainer extends React.Component {
  state = {
    showSkus: false,
  }
  
  handleClick = () => {
    this.setState({
      showSkus: !this.state.showSkus,
    });
  }

  render() {
    const { name, skus } = this.props;
    const { showSkus } = this.state;
    return (
      <Section
        noPadTop 
        onClick={() => this.handleClick() }
      >
        <h1>
          {name}
        </h1>
        <Skus
          {...skus} 
          showSkus={showSkus} 
        />
      </Section>
    )
  }
}

export default ProductContainer;