import initialState from 'reducers/initialState';

const competitionNameMap = {
  'Primera Division': 'La Liga',
};

function getCompetitionName(competition) {
  if(competitionNameMap.hasOwnProperty(competition)) {
    return competitionNameMap[competition];
  }
  return competition;
}

export default function competitionReducer(state = initialState, action) {
  switch (action.type) {

  case 'SET_DISPLAY_MODE':
    return Object.assign({}, state, { displayMode: action.displayMode });

  case 'UPDATE_MATCHDAY':
    return Object.assign({}, state, { matchday: action.matchday });

    /* COMPETITION */
  case 'BEGIN_LOAD_COMPETITION':
    return Object.assign({}, state, { competitionLoading: true });
  case 'LOAD_COMPETITION_SUCCESS':
    return Object.assign({}, state,
      { name: getCompetitionName(action.competition.name) },
      { competitionLoading: false },
      { competitionLoaded: true },
      { matchday: action.competition.currentSeason.currentMatchday === null
        ? 1
        : action.competition.currentSeason.currentMatchday },
      { matchesLoaded: false },
      { standingsLoaded: false },
      { teamsLoaded: false },
    );

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
