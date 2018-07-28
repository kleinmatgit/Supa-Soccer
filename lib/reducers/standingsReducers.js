import initialState from 'reducers/initialState';

export default function standingsReducer(state = initialState.standings, action) {
  switch (action.type) {
  case 'LOAD_STANDINGS_SUCCESS':
    return Object.assign([], action.standings);
  default:
    return state;
  }
}
