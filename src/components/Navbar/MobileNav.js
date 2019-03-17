import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  MenuItem,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import routes from '../../routes';
import {
  MobileNavWrapper,
} from './styles.MobileNav';
import { navigate } from 'gatsby';

const styles = theme => ({
  root: {
    backgroundColor: 'blue',
  },
  popper: {
    transform: "translate3d(0px, 69px, 0px) !important",
    right: "0px",
    zIndex: 1,
  },
})

class MobileNav extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleNavigate = (route) => {
    this.setState({ open: false });
    navigate(route)
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <MobileNavWrapper>
        <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
          <FaBars />
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal className={classes.popper} >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                    {
                      routes.map(({route, title}, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => this.handleNavigate(route)}>{title}</MenuItem>
                      ))
                    }
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
      </MobileNavWrapper>
    );
  }
}

export default withStyles(styles)(MobileNav);