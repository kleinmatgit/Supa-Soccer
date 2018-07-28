import * as types from 'actions/actionTypes';

export function loadCompetition(competition) {
  return {type: types.LOAD_COMPETITION, competition};
}
