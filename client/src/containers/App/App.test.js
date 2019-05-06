import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../../components/AppBar';
import { AppContainer } from './App.styles';

describe('App component', () => {
  it('should render Route components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MuiThemeProvider)).toHaveLength(1);
    expect(wrapper.find(Router)).toHaveLength(1);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(AppContainer)).toHaveLength(1);
    expect(wrapper.find(CssBaseline)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(3);
  });
});
