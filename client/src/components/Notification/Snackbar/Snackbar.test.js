import React from 'react';
import { shallow } from 'enzyme';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from './Snackbar.component';

describe('Snackbar component', () => {
  const props = {
    variant: 'success',
  };

  it('should render SnackbarContent component', () => {
    const wrapper = shallow(<Snackbar {...props} classes={{}} />);
    expect(wrapper.find(SnackbarContent)).toHaveLength(1);
  });
});
