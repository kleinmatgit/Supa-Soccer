import {combineReducers} from 'redux';
import competition from 'reducers/competitionReducers';

const rootReducer = combineReducers({
  competition,
});

export default rootReducer;
