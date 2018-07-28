import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/configureStore';
import {Provider} from 'react-redux';
import {loadMatches} from 'actions/matchesActions';
import {loadStandings} from 'actions/standingsActions';
import {loadTeams} from 'actions/teamsActions';
import initialState from 'reducers/initialState';

import App from 'components/App';

const store = configureStore(initialState);
// dispatch thunks
store.dispatch(loadMatches());
store.dispatch(loadStandings());
store.dispatch(loadTeams());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
