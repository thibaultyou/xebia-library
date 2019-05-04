import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => <h1>Home component ...</h1>;
const Basket = () => <h1>Basket component ...</h1>;
const Fallback = () => <h1>Fallback component ...</h1>;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/basket" exact component={Basket} />
        <Route component={Fallback} />
      </Switch>
    </Router>
  );
}

export default App;
