import initialState from 'reducers/initialState';

export default function competitionsReducer(state = initialState.competition, action) {
  switch (action.type) {
  case 'LOAD_COMPETITION':
    return action.competition;
    //return state;
  default:
    return state;
  }
}
