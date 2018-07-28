import {combineReducers} from 'redux';
import matches from 'reducers/matchesReducers';
import standings from 'reducers/standingsReducers';
import teams from 'reducers/teamsReducers';
import competition from 'reducers/competitionsReducers';

const rootReducer = combineReducers({
  competition,
  matches,
  standings,
  teams,
});

export default rootReducer;
