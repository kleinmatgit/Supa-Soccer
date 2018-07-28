import MatchApi from 'api/mockApi';
import * as types from 'actions/actionTypes';

export function loadCompetition(competition) {
  return {type: types.LOAD_COMPETITION, competition};
}

export function loadMatchesSuccess(matches) {
  return {type: types.LOAD_MATCHES_SUCCESS, matches};
}

export function loadMatches() {
  return function(dispatch, getState) {
    return MatchApi.getCompetitionMatches(getState().competition.name).then(matches => {
      dispatch(loadMatchesSuccess(matches));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadStandingsSuccess(standings) {
  return {type: types.LOAD_STANDINGS_SUCCESS, standings};
}

export function loadStandings() {
  return function(dispatch, getState) {
    return MatchApi.getCompetitionStandings(getState().competition.name).then(standings => {
      dispatch(loadStandingsSuccess(standings));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTeamsSuccess(teams) {
  return {type: types.LOAD_TEAMS_SUCCESS, teams};
}

export function loadTeams() {
  return function(dispatch, getState) {
    return MatchApi.getCompetitionTeams(getState().competition.name).then(teams => {
      dispatch(loadTeamsSuccess(teams));
    }).catch(error => {
      throw(error);
    });
  };
}
