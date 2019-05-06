import React from 'react';
import { shallow } from 'enzyme';
import Basket from './Basket';
import List from '../../components/Basket';

describe('Basket component', () => {
  it('should render List component', () => {
    const wrapper = shallow(<Basket />);
    expect(wrapper.find(List)).toHaveLength(1);
  });
});
