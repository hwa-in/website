import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { FaBars } from 'react-icons/fa';
import routes from '../../routes';
import {
  MobileNavWrapper,
  Mobile,
} from './styles.MobileNav';
import { navigate } from 'gatsby';

class MobileNav extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (route) => {
    this.setState({ anchorEl: null });
    navigate(route)
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <MobileNavWrapper>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick} 
        >
          <FaBars />
        </Button>
        <Mobile
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {
          routes.map(({route, title}, index) => (
            <MenuItem key={index} onClick={() => this.handleClose(route)}>{title}</MenuItem>
          ))
        }
        </Mobile>
      </MobileNavWrapper>
    );
  }
}

export default MobileNav;