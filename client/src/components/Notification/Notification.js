import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarWrapper from './SnackbarWrapper';

const Notification = props => {
  const { variant, message } = props;
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={5000}
      onClose={() => setOpen(false)}
    >
      <SnackbarWrapper
        variant={variant}
        message={`${message}`}
        onClose={() => setOpen(false)}
      />
    </Snackbar>
  );
};

Notification.defaultProps = {
  variant: 'info',
};

Notification.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

export default Notification;
