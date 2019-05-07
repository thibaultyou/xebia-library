import React from 'react';
import { shallow } from 'enzyme';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Header from './Header';

describe('Header component', () => {
  it('should render all child components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(TableHead)).toHaveLength(1);
    expect(wrapper.find(TableRow)).toHaveLength(1);
    expect(wrapper.find(TableCell)).toHaveLength(4);
    expect(wrapper.find(Typography)).toHaveLength(3);
  });
});
