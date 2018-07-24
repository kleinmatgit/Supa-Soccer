import initialState from 'reducers/initialState';

export default function matchesReducer(state = initialState.matches, action) {
  switch (action.type) {
  case 'LOAD_MATCHES_SUCCESS':
    //return Object.assign([], state, {matches: action.matches});
    return Object.assign([], action.matches);
  default:
    return state;
  }
}
