import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Books from '../../components/Books';

const Home = props => {
  const { classes } = props;
  return (
    <Grid container spacing={40} className={classes.bookGrid}>
      <Books />
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;
