import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './Loader.styles';

function Loader(props) {
  const { classes } = props;
  return (
    <Container>
      <CircularProgress className={classes.progress} thickness={5} size={40} />
    </Container>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Loader;
