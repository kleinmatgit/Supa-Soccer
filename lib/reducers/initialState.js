import * as comp from 'constants/competitions';

export default {
  competition: {
    name: comp.LIGUE1,
    matchState: {
      matches: [],
      matchesLoaded: false,
    },
    standingState: {
      standings: [],
      standingsLoaded: false,
    },
    teamState: {
      teams: [],
      teamsLoaded: false,
    },
  }
};
