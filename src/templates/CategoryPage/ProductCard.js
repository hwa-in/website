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
    height: 450,
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

const ProductCard = ({ classes, id, slug, title, description, imagePreview, category }) => {
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
          <Link to={`/products/${category}/${slug}`}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
          </Link>
        <Typography component="p">
          {description.childMarkdownRemark.excerpt}
        </Typography>
      </CardContent>
      <CardActions className={classes.learnMore}>
        <LearnMore to={`/products/${category}/${slug}`}>Learn More</LearnMore>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);