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


const styles = (theme) => ({
  card: {
    maxWidth: 345,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});

const ProductCard = ({ classes, id, slug, title, description, imagePreview }) => {
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
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography component="p">
          {description.description}
        </Typography>
      </CardContent>
      <CardActions>
        <LearnMore to={'/products'}>Learn More</LearnMore>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);