import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { categoryCard } from './styles';
import {
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';

const CategoryCard = ({ classes, name, slug, categoryImage, products}) => {
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
        <Link to={`/products/${slug}`}><h1 className={classes.categoryTitle}>{name}</h1></Link>
          <div>
          {
            products.map(({productSlug, productTitle}, index) => {
              return (
                <Link to={`/products/${slug}/${productSlug}`} key={index}>
                  <p className={classes.productTitle}>{productTitle}</p>
                </Link>
              )
            })
          }
          </div>
      </CardContent>
    </Card>
  )
};

export default withStyles(categoryCard)(CategoryCard);
