import MatchApi from 'api/mockApi';
import * as types from 'actions/actionTypes';

export function loadCompetition(competition) {
  return {type: types.LOAD_COMPETITION, competition};
}

export function setDisplayMode(displayMode) {
  return {type: types.SET_DISPLAY_MODE, displayMode};
}

/* MATCHES */
export function begingLoadMatches() {
  return {type: types.BEGIN_LOAD_MATCHES};
}

export function loadMatches() {
  return function(dispatch, getState) {
    dispatch(begingLoadMatches());
    return MatchApi.getCompetitionMatches(getState().competition.name).then(matches => {
      dispatch(loadMatchesSuccess(matches));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadMatchesSuccess(matches) {
  return {type: types.LOAD_MATCHES_SUCCESS, matches};
}

/* STANDINGS */
export function begingLoadStandings() {
  return {type: types.BEGIN_LOAD_STANDINGS};
}

export function loadStandings() {
  return function(dispatch, getState) {
    dispatch(begingLoadStandings());
    return MatchApi.getCompetitionStandings(getState().competition.name).then(standings => {
      dispatch(loadStandingsSuccess(standings));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadStandingsSuccess(standings) {
  return {type: types.LOAD_STANDINGS_SUCCESS, standings};
}

/* TEAMS */
export function begingLoadTeams() {
  return {type: types.BEGIN_LOAD_TEAMS};
}

export function loadTeams() {
  return function(dispatch, getState) {
    dispatch(begingLoadTeams());
    return MatchApi.getCompetitionTeams(getState().competition.name).then(teams => {
      dispatch(loadTeamsSuccess(teams));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTeamsSuccess(teams) {
  return {type: types.LOAD_TEAMS_SUCCESS, teams};
}
