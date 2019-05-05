import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, styles } from './LoadingIndicator.styles';

function LoadingIndicator(props) {
  const { classes } = props;
  return (
    <Container>
      <CircularProgress className={classes.progress} thickness={5} size={40} />
    </Container>
  );
}

LoadingIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingIndicator);
