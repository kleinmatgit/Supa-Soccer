import initialState from 'reducers/initialState';

export default function competitionReducer(state = initialState.competition, action) {
  switch (action.type) {

  case 'LOAD_COMPETITION':
    return Object.assign({}, state,
      { name: action.competition },
      { matchesLoaded: false },
      { standingsLoaded: false },
      { teamsLoaded: false },
  );

  case 'SET_DISPLAY_MODE':
    return Object.assign({}, state, { displayMode: action.displayMode });

  /* MATCHES */
  case 'BEGIN_LOAD_MATCHES':
    return Object.assign({}, state, { matchesLoading: true });
  case 'LOAD_MATCHES_SUCCESS':
    return Object.assign({}, state, { matches: action.matches }, { matchesLoading: false }, { matchesLoaded: true });

  /* STANDINGS */
  case 'BEGIN_LOAD_STANDINGS':
    return Object.assign({}, state, { standingsLoading: true });
  case 'LOAD_STANDINGS_SUCCESS':
    return Object.assign({}, state, { standings: action.standings }, { standingsLoading: false }, { standingsLoaded: true });

  /* TEAMS */
  case 'BEGIN_LOAD_TEAMS':
    return Object.assign({}, state, { teamsLoading: true });
  case 'LOAD_TEAMS_SUCCESS':
    return Object.assign({}, state, { teams: action.teams }, { teamsLoading: false }, { teamsLoaded: true });

  default:
    return state;
  }
}
