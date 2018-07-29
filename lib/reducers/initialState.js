import * as comp from 'constants/competitions';
import DisplayMode from 'constants/displayMode';

export default {
  competition: {
    name: comp.LIGUE1,
    numberOfMatchday: 2,
    matchday: 2,
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
