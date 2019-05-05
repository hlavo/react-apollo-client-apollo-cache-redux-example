import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ReduxCache, apolloReducer } from 'apollo-cache-redux';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

// Redux Store Setup

const initialState = {
};
const store = createStore(
  combineReducers({
    apollo: apolloReducer,
  }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Apollo Client Setup

const cache = new ReduxCache({ store });

const BASE_URL = 'https://graphql-pokemon.now.sh';

const httpLink = new HttpLink({
  uri: BASE_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
