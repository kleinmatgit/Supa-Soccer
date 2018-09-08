import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/configureStore';
import {Provider} from 'react-redux';
import {loadCompetition} from 'actions/competitionActions';
import initialState from 'reducers/initialState';
import '../../node_modules/toastr/build/toastr.min.css';
import 'styles/app.css';

import App from 'components/App';

const store = configureStore(initialState);
// dispatch thunks
store.dispatch(loadCompetition(initialState.competition.name));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
