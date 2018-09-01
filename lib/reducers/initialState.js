import * as comp from 'constants/competitions';
import DisplayMode from 'constants/displayMode';

export default {
  competition: {
    name: comp.LIGUE1,
    competitionLoading: false,
    competitionLoaded: false,
    numberOfMatchday: 1,
    matchday: 1,
    displayMode: DisplayMode.MATCHES,
    matches: [],
    matchesLoading: false,
    matchesLoaded: false,
    standings: [],
    standingsLoading: false,
    standingsLoaded: false,
    teams: [],
    teamsLoading: false,
    teamsLoaded: false,
  },
};
