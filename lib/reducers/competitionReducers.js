import initialState from 'reducers/initialState';

export default function competitionReducer(state = initialState.competition, action) {
  switch (action.type) {
  case 'LOAD_COMPETITION':
    return Object.assign({}, state,
      { name: action.competition },
      { matchState: { matches: state.matchState.matches, matchesLoaded: false } },
      { standingState: { standings: state.standingState.standings, standingsLoaded: false } },
      { teamState: { teams: state.teamState.teams, teamsLoaded: false } }
  );
  case 'LOAD_MATCHES_SUCCESS':
    return Object.assign({}, state, { matchState: { matches: action.matches, matchesLoaded: true } });
  case 'LOAD_STANDINGS_SUCCESS':
    return Object.assign({}, state, { standingState: { standings: action.standings, standingsLoaded: true } });
  case 'LOAD_TEAMS_SUCCESS':
    return Object.assign({}, state, { teamState: { teams: action.teams, teamsLoaded: true } });
  default:
    return state;
  }
}
