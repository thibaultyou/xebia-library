import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const apollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `http://${window.location.hostname}:5000/graphql`,
  }),
});

const Root = apollo => (
  <ApolloProvider client={apollo}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(Root(apollo), document.getElementById('root'));
serviceWorker.unregister();

export default Root;
