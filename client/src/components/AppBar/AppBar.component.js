import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import BookIcon from '@material-ui/icons/Book';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styles from './AppBar.styles';

const LibraryAppBar = props => {
  const { classes, basket } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.homeButton} color="inherit">
            <Link to="/" className={classes.link}>
              <BookIcon />
            </Link>
          </IconButton>
          <Typography
            className={classes.title}
            variant="h5"
            color="inherit"
            noWrap
          >
            Xebia library
          </Typography>
          <div className={classes.grow} />
          <IconButton aria-haspopup="true" color="inherit">
            <Badge badgeContent={basket.length} color="secondary">
              <Link to="/basket" className={classes.link}>
                <ShoppingBasketIcon />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

LibraryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  basket: PropTypes.array.isRequired,
};

export default withStyles(styles)(LibraryAppBar);
