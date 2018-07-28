import MatchApi from 'api/mockApi';
import * as types from 'actions/actionTypes';

export function loadTeamsSuccess(teams) {
  return {type: types.LOAD_TEAMS_SUCCESS, teams};
}

export function loadTeams() {
  return function(dispatch, getState) {
    return MatchApi.getCompetitionTeams(getState().competition).then(teams => {
      dispatch(loadTeamsSuccess(teams));
    }).catch(error => {
      throw(error);
    });
  };
}
