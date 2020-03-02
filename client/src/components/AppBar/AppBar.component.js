import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import BookIcon from '@material-ui/icons/Book';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Container } from './AppBar.styles';

const LibraryAppBar = props => {
  const { classes, basketLength } = props;

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <IconButton className={classes.homeButton} color="inherit">
              <BookIcon />
            </IconButton>
          </Link>
          <Typography
            className={classes.title}
            variant="h5"
            color="inherit"
            noWrap
          >
            Xebia library
          </Typography>
          <div className={classes.grow} />
          <Link to="/basket" className={classes.link}>
            <IconButton aria-haspopup="true" color="inherit">
              <Badge badgeContent={basketLength} color="secondary">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

LibraryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  basketLength: PropTypes.number.isRequired,
};

export default LibraryAppBar;
