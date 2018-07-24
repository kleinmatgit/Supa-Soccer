import MatchApi from 'api/mockApi';
import * as types from 'actions/actionTypes';

export function loadMatchesSuccess(matches) {
  return {type: types.LOAD_MATCHES_SUCCESS, matches};
}

export function loadMatches() {
  return function(dispatch) {
    return MatchApi.getCompetitionMatches('Ligue 1').then(matches => {
      dispatch(loadMatchesSuccess(matches));
    }).catch(error => {
      throw(error);
    });
  };
}
