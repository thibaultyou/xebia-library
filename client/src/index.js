import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './modules/store';
import './index.css';
import App from './containers/App';

const apollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `http://${window.location.hostname}:5000/graphql`,
  }),
});

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const Root = () => (
  <ReduxProvider store={reduxStore}>
    <ApolloProvider client={apollo}>
      <App />
    </ApolloProvider>
  </ReduxProvider>
);

ReactDOM.render(Root(reduxStore, apollo), document.getElementById('root'));
serviceWorker.unregister();

export default Root;
