import MatchApi from 'api/mockApi';
import * as types from 'actions/actionTypes';

export function loadStandingsSuccess(standings) {
  return {type: types.LOAD_STANDINGS_SUCCESS, standings};
}

export function loadStandings(competition) {
  return function(dispatch) {
    return MatchApi.getCompetitionStandings(competition).then(standings => {
      dispatch(loadStandingsSuccess(standings));
    }).catch(error => {
      throw(error);
    });
  };
}
