import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './Loader.styles';
import Loader from './Loader.component';

describe('Loader component', () => {
  it('should render all child components', () => {
    const wrapper = shallow(<Loader classes={{}} />);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});
