import React from 'react';
import ReactDOM from 'react-dom';
import Fallback from './Fallback';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fallback />, div);
  ReactDOM.unmountComponentAtNode(div);
});
