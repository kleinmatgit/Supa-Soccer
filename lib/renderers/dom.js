import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/configureStore';
import {Provider} from 'react-redux';
import {loadMatches} from 'actions/matchesActions';
// import {loadStandings} from 'actions/standingsActions';
import initialState from 'reducers/initialState';

import App from 'components/App';

const store = configureStore(initialState);
store.dispatch(loadMatches());
// store.dispatch(loadStandings());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
