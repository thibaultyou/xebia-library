import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './Home.styles';
import Books from '../../components/Books';

const Home = props => {
  const { classes } = props;
  return (
    <Fragment>
      <Grid container spacing={40} className={classes.bookGrid}>
        <Books />
      </Grid>
    </Fragment>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
