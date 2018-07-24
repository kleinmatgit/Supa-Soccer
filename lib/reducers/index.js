import {combineReducers} from 'redux';
import matches from 'reducers/matchesReducers';
// import standings from 'reducers/standingsReducers';

const rootReducer = combineReducers({
  matches,
  // standings,
});

export default rootReducer;
