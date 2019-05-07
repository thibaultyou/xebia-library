import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContainer from './Snackbar';
import Notification from './Notification';

describe('Notification component', () => {
  const props = {
    message: 'Some notification',
  };

  it('should render all child components', () => {
    const wrapper = shallow(<Notification {...props} />);
    expect(wrapper.find(Snackbar)).toHaveLength(1);
    expect(wrapper.find(SnackbarContainer)).toHaveLength(1);
  });

  it('should render message in SnackbarContainer component', () => {
    const wrapper = shallow(<Notification {...props} />);
    expect(wrapper.find(SnackbarContainer).props().message).toBe(
      'Some notification',
    );
  });
});
