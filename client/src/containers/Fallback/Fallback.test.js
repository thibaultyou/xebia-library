import React from 'react';
import { shallow } from 'enzyme';
import Fallback from './Fallback';
import { Redirect } from 'react-router';

describe('Fallback component', () => {
  it('should render Redirect component', () => {
    const wrapper = shallow(<Fallback />);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
