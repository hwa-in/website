import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { navigate } from 'gatsby';
import {
  Dialog,
  List,
  ListItem,
} from '@material-ui/core';

const productModal = theme => ({
  root: {
    top: '70px',
  },
  scrollPaper: {
    alignItems: 'start',
  },
  paper: {
    margin: 0,
  }
});

const routes = [
  {
    title: 'Infocenter',
    route: '/infocenter',
  },
  {
    title: 'Events',
    route: '/infocenter/events',
  },
  {
    title: 'News',
    route: '/infocenter/news',
  },
  {
    title: 'Videos',
    route: '/infocenter/videos',
  },
]

class InfoCenterModal extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleItemClick = (route) => {
    this.props.onClose();
    navigate(route);
  };

  render() {
    const { classes, onClose, ...other } = this.props;
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
        <div>
          <List>
            {
              routes.map((route, i) => (
                <ListItem>
                  {route.title}
                </ListItem>
              ))
            }
          </List>
        </div>
      </Dialog>
    );
  }
}

InfoCenterModal.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default withStyles(productModal)(InfoCenterModal);