import React from 'react';
import ReactDOM from 'react-dom';
import Basket from './Basket';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Basket />, div);
  ReactDOM.unmountComponentAtNode(div);
});
