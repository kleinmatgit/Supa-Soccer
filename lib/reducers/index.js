import {combineReducers} from 'redux';
//import matchState from 'reducers/matchesReducers';
// import standingState from 'reducers/standingsReducers';
// import teamState from 'reducers/teamsReducers';
import competition from 'reducers/competitionsReducers';

const rootReducer = combineReducers({
  competition,
  //matchState,
  //standingState,
  //teamState,
});

export default rootReducer;
