import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './Home.styles';
import Books from '../../components/Books';

const Home = props => {
  const { classes } = props;

  return (
    <Fragment>
      <Toolbar>
        <Typography
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Books
        </Typography>
      </Toolbar>
      <Books />
    </Fragment>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
