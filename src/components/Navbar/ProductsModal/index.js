import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CategoryCard from './CategoryCard';
import { navigate } from 'gatsby';
import {
  Dialog,
} from '@material-ui/core';
import { productModal } from './styles';

class ProductsModal extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleItemClick = (route) => {
    this.props.onClose();
    navigate(route);
  };

  render() {
    const { classes, onClose, categories, ...other } = this.props;
    return (
      <Dialog 
        onClose={this.handleClose} 
        aria-labelledby="simple-dialog-title"
        {...other}
        classes={{
          root: classes.root, 
          scrollPaper: classes.scrollPaper, 
          paper: classes.paper,
        }}
      >
        <div className={classes.categoryWrapper}>
          {
            categories.map(({category}, index) => (
              <CategoryCard 
                key={index}
                {...category}
                navigateTo={this.handleItemClick}
              />
            ))
          }
        </div>
        <div className={classes.learnMore}>
          <p className={classes.learnMoreText} onClick={() => this.handleItemClick('/products')}>All Products</p>
        </div>
      </Dialog>
    );
  }
}

ProductsModal.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default withStyles(productModal)(ProductsModal);