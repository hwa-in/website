import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { categoryCard } from './styles';
import {
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';

const CategoryCard = ({ classes, name, slug, categoryImage, products, navigateTo}) => {
  return (
    <Card
      raised={false}
      elevation={0}
      className={classes.card}
    >
      <CardMedia
        image={categoryImage.fluid.src}
        title={name}
        className={classes.media}
      />
      <CardContent>
        <h1 onClick={() => navigateTo(`/products/${slug}`)} className={classes.categoryTitle}>{name}</h1>
          <div>
          {
            products.map(({productSlug, productTitle}, index) => (
              <p 
                key={index}
                onClick={() => navigateTo(`/products/${slug}/${productSlug}`)} 
                className={classes.productTitle}
              >
                {productTitle}
              </p>
            ))
          }
          </div>
      </CardContent>
    </Card>
  )
};

export default withStyles(categoryCard)(CategoryCard);
