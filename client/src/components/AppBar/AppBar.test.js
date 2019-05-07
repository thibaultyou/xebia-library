import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import BookIcon from '@material-ui/icons/Book';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LibraryAppBar from './AppBar.component';
import { Container } from './AppBar.styles';

describe('AppBar component', () => {
  const props = {
    basket: [],
  };

  it('should render all child components', () => {
    const wrapper = shallow(<LibraryAppBar {...props} classes={{}} />);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
    expect(wrapper.find(Link)).toHaveLength(2);
    expect(wrapper.find(IconButton)).toHaveLength(2);
    expect(wrapper.find(BookIcon)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Badge)).toHaveLength(1);
    expect(wrapper.find(ShoppingBasketIcon)).toHaveLength(1);
  });
});
