import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.component';
import Grid from '@material-ui/core/Grid';
import Books from '../../components/Books';

describe('Home component', () => {
  it('should render Books component', () => {
    const wrapper = shallow(<Home classes={{}} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Books)).toHaveLength(1);
  });
});
