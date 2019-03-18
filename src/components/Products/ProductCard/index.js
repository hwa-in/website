import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import LearnMore from 'styledComponents/LearnMore';
import { Link } from 'gatsby';


const styles = (theme) => ({
  card: {
    maxWidth: 345,
    height: 445,
    margin: '0 1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
    position: 'relative',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'contain',
    padding: '1rem',
  },
  learnMore: {
    position: 'absolute',
    bottom: 16,
    left: 6,
  },
});

const ProductCard = (props) => {
  const { classes, slug, title, description, imagePreview, categorySlug, category } = props
  let catSlug;
  if (categorySlug) {
    catSlug = categorySlug;
  } else {
    let cat = category.filter(c => c.slug !== "lazer-systems");
    catSlug = cat[0].slug
  }
  return (
    <Card className={classes.card}>
        {imagePreview && 
          <CardMedia
            component="img"
            alt={title}
            className={classes.media}
            height="50%"
            image={imagePreview.fluid.src}
            title="Contemplative Reptile"
          />
        }
      <CardContent>
          <Link to={`/products/${catSlug}/${slug}`}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
          </Link>
        <Typography component="p">
          {description.childMarkdownRemark.excerpt}
        </Typography>
      </CardContent>
      <CardActions className={classes.learnMore}>
        <LearnMore to={`/products/${catSlug}/${slug}`}>Learn More</LearnMore>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.array,
  title: PropTypes.string.isRequired,
  imagePreview: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProductCard);