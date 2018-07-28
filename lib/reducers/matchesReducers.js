import initialState from 'reducers/initialState';

// const initialMatchesState = {
//   matches: initialState.matches,
//   matchesLoaded: initialState.matchesLoaded,
// };

export default function matchesReducer(state = initialState.matches, action) {
  switch (action.type) {
  case 'LOAD_MATCHES_SUCCESS':
    //return Object.assign([], state, {matches: action.matches});
    return Object.assign([], action.matches);
    //return Object.assign({}, {matches: action.matches, matchesLoaded: true});

  default:
    return state;
  }
}
