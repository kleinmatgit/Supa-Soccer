import initialState from 'reducers/initialState';

export default function standingsReducer(state = initialState.teams, action) {
  switch (action.type) {
  case 'LOAD_TEAMS_SUCCESS':
    return Object.assign([], action.teams);
  default:
    return state;
  }
}
