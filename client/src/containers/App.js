import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppContainer, theme } from './App.styles';
import Home from './Home';
import Basket from './Basket';
import Fallback from './Fallback';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/basket" exact component={Basket} />
            <Route component={Fallback} />
          </Switch>
        </Router>
      </AppContainer>
      <CssBaseline />
    </MuiThemeProvider>
  );
};

export default App;
