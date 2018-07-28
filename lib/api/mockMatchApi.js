import delay from './delay';
import _ from 'underscore';

const competitionIds = {
  'Ligue 1': 450,
  'La Liga': 455,
  'Serie A': 456,
  'Bundesliga': 452,
  'Premier League': 445
};

const mockCompetitions = {
  'Ligue 1': {
    _links: {
      self: {
        href: 'http://api.football-data.org/v1/competitions/450'
      },
      teams: {
        href: 'http://api.football-data.org/v1/competitions/450/teams'
      },
      fixtures: {
        href: 'http://api.football-data.org/v1/competitions/450/fixtures'
      },
      leagueTable: {
        href: 'http://api.football-data.org/v1/competitions/450/leagueTable'
      }
    },
    id: 450,
    caption: 'Ligue 1 2017/18',
    league: 'FL1',
    year: '2017',
    currentMatchday: 34,
    numberOfMatchdays: 38,
    numberOfTeams: 20,
    numberOfGames: 380,
    lastUpdated: '2018-04-19T06:50:21Z'
  },
  'La Liga': {
    _links: {
      self: {
        href: 'http://api.football-data.org/v1/competitions/455'
      },
      teams: {
        href: 'http://api.football-data.org/v1/competitions/455/teams'
      },
      fixtures: {
        href: 'http://api.football-data.org/v1/competitions/455/fixtures'
      },
      leagueTable: {
        href: 'http://api.football-data.org/v1/competitions/455/leagueTable'
      }
    },
    id: 455,
    caption: 'Primera Division 2017',
    league: 'PD',
    year: '2017',
    currentMatchday: 34,
    numberOfMatchdays: 38,
    numberOfTeams: 20,
    numberOfGames: 380,
    lastUpdated: '2018-04-19T07:10:08Z'
  }
};

const mockMatches = {
  'Ligue 1': {
    34: [
      {
        id: 161003,
        date: '2018-04-06T18:45:00Z',
        status: 'FINISHED',
        homeTeamName: 'AS Saint-Étienne',
        awayTeamName: 'Paris Saint-Germain',
        result: {
          goalsHomeTeam: 1,
          goalsAwayTeam: 1,
          halfTime: {
            goalsHomeTeam: 1,
            goalsAwayTeam: 0
          }
        }
      },

      {
        id: 161004,
        date: '2018-04-07T15:00:00Z',
        status: 'FINISHED',
        homeTeamName: 'AS Monaco FC',
        awayTeamName: 'FC Nantes',
        result: {
          goalsHomeTeam: 2,
          goalsAwayTeam: 1,
          halfTime: {
            goalsHomeTeam: 2,
            goalsAwayTeam: 1
          }
        }
      },

      {
        id: 161005,
        date: '2018-04-07T18:00:00Z',
        status: 'FINISHED',
        homeTeamName: 'Amiens SC',
        awayTeamName: 'SM Caen',
        result: {
          goalsHomeTeam: 3,
          goalsAwayTeam: 0,
          halfTime: {
            goalsHomeTeam: 2,
            goalsAwayTeam: 0
          }
        }
      }
    ],
    33: [
      {
        id: 161000,
        date: '2018-04-06T18:45:00Z',
        status: 'FINISHED',
        homeTeamName: 'AS Saint-Étienne',
        awayTeamName: 'Amiens SC',
        result: {
          goalsHomeTeam: 1,
          goalsAwayTeam: 1,
          halfTime: {
            goalsHomeTeam: 1,
            goalsAwayTeam: 0
          }
        }
      },

      {
        id: 161001,
        date: '2018-04-07T15:00:00Z',
        status: 'FINISHED',
        homeTeamName: 'Paris Saint-Germain',
        awayTeamName: 'FC Nantes',
        result: {
          goalsHomeTeam: 6,
          goalsAwayTeam: 2,
          halfTime: {
            goalsHomeTeam: 1,
            goalsAwayTeam: 2
          }
        }
      },

      {
        id: 161002,
        date: '2018-04-07T18:00:00Z',
        status: 'FINISHED',
        homeTeamName: 'AS Monaco FC',
        awayTeamName: 'SM Caen',
        result: {
          goalsHomeTeam: 0,
          goalsAwayTeam: 0,
          halfTime: {
            goalsHomeTeam: 0,
            goalsAwayTeam: 0
          }
        }
      }
    ]
  },

  'La Liga': {
    34: [
      {
        id: 163003,
        date: '2017-08-19T18:15:00Z',
        status: 'FINISHED',
        homeTeamName: 'Girona FC',
        awayTeamName: 'Real Betis',
        result: {
          goalsHomeTeam: 5,
          goalsAwayTeam: 5,
          halfTime: {
            goalsHomeTeam: 3,
            goalsAwayTeam: 1
          }
        }
      },

      {
        id: 163004,
        date: '2017-08-19T20:15:00Z',
        status: 'FINISHED',
        homeTeamName: 'Club Atlético de Madrid',
        awayTeamName: 'RCD Espanyol',
        result: {
          goalsHomeTeam: 3,
          goalsAwayTeam: 1
        }
      },

      {
        id: 163005,
        date: '2017-08-20T18:15:00Z',
        status: 'FINISHED',
        homeTeamName: 'FC Barcelona',
        awayTeamName: 'Sevilla FC',
        result: {
          goalsHomeTeam: 4,
          goalsAwayTeam: 0,
          halfTime: {
            goalsHomeTeam: 3,
            goalsAwayTeam: 0
          }
        }
      }
    ],
    33: [
      {
        id: 163000,
        date: '2017-08-19T18:15:00Z',
        status: 'FINISHED',
        homeTeamName: 'Girona FC',
        awayTeamName: 'Club Atlético de Madrid',
        result: {
          goalsHomeTeam: 2,
          goalsAwayTeam: 2,
          halfTime: {
            goalsHomeTeam: 2,
            goalsAwayTeam: 0
          }
        }
      },

      {
        id: 163001,
        date: '2017-08-19T20:15:00Z',
        status: 'FINISHED',
        homeTeamName: 'Sevilla FC',
        awayTeamName: 'RCD Espanyol',
        result: {
          goalsHomeTeam: 1,
          goalsAwayTeam: 1
        }
      },

      {
        id: 163002,
        date: '2017-08-20T18:15:00Z',
        status: 'FINISHED',
        homeTeamName: 'FC Barcelona',
        awayTeamName: 'Real Betis',
        result: {
          goalsHomeTeam: 2,
          goalsAwayTeam: 0,
          halfTime: {
            goalsHomeTeam: 2,
            goalsAwayTeam: 0
          }
        }
      }

    ]
  }
};

const mockStandings = {
  'La Liga': [
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/81'
        }
      },
      position: 1,
      teamName: 'FC Barcelona',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg',
      playedGames: 31,
      points: 79,
      goals: 79,
      goalsAgainst: 16,
      goalDifference: 63,
      wins: 24,
      draws: 7,
      losses: 0,
      home: {
        goals: 43,
        goalsAgainst: 7,
        wins: 13,
        draws: 2,
        losses: 0
      },
      away: {
        goals: 36,
        goalsAgainst: 9,
        wins: 11,
        draws: 5,
        losses: 0
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/78'
        }
      },
      position: 2,
      teamName: 'Club Atlético de Madrid',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/c/c1/Atletico_Madrid_logo.svg',
      playedGames: 30,
      points: 67,
      goals: 50,
      goalsAgainst: 14,
      goalDifference: 36,
      wins: 20,
      draws: 7,
      losses: 3,
      home: {
        goals: 25,
        goalsAgainst: 4,
        wins: 11,
        draws: 4,
        losses: 0
      },
      away: {
        goals: 25,
        goalsAgainst: 10,
        wins: 9,
        draws: 3,
        losses: 3
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/86'
        }
      },
      position: 3,
      teamName: 'Real Madrid CF',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg',
      playedGames: 30,
      points: 63,
      goals: 76,
      goalsAgainst: 33,
      goalDifference: 43,
      wins: 19,
      draws: 6,
      losses: 5,
      home: {
        goals: 44,
        goalsAgainst: 17,
        wins: 10,
        draws: 2,
        losses: 3
      },
      away: {
        goals: 32,
        goalsAgainst: 16,
        wins: 9,
        draws: 4,
        losses: 2
      }
    }
  ],

  'Ligue 1': [
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/524'
        }
      },
      position: 1,
      teamName: 'Paris Saint-Germain',
      crestURI: 'https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg',
      playedGames: 32,
      points: 84,
      goals: 96,
      goalsAgainst: 22,
      goalDifference: 74,
      wins: 27,
      draws: 3,
      losses: 2,
      home: {
        goals: 61,
        goalsAgainst: 10,
        wins: 16,
        draws: 0,
        losses: 0
      },
      away: {
        goals: 35,
        goalsAgainst: 12,
        wins: 11,
        draws: 3,
        losses: 2
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/548'
        }
      },
      position: 2,
      teamName: 'AS Monaco FC',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/3/3c/AS_Monaco.svg',
      playedGames: 32,
      points: 70,
      goals: 77,
      goalsAgainst: 34,
      goalDifference: 43,
      wins: 21,
      draws: 7,
      losses: 4,
      home: {
        goals: 46,
        goalsAgainst: 17,
        wins: 14,
        draws: 2,
        losses: 1
      },
      away: {
        goals: 31,
        goalsAgainst: 17,
        wins: 7,
        draws: 5,
        losses: 3
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/516'
        }
      },
      position: 3,
      teamName: 'Olympique de Marseille',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/2/27/Olympique_Marseille_Logo.svg',
      playedGames: 31,
      points: 62,
      goals: 64,
      goalsAgainst: 38,
      goalDifference: 26,
      wins: 18,
      draws: 8,
      losses: 5,
      home: {
        goals: 35,
        goalsAgainst: 16,
        wins: 9,
        draws: 4,
        losses: 2
      },
      away: {
        goals: 29,
        goalsAgainst: 22,
        wins: 9,
        draws: 4,
        losses: 3
      }
    }
  ]
};

class MatchApi {
  static getMatchId(match) {
    let href = match._links.self.href;
    return href.substr(href.lastIndexOf('/') + 1);
  }
  static getCompetitionId(competition) {
    return competitionIds[competition];
  }
  static getCompetitionFromId(competitionId) {
    return (_.invert(competitionIds))[competitionId];
  }
    // static getCompetitions() {
    //     return competitions;
    // }

    // ASYNC stuff
  static getCompetitionAsync(competition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], mockCompetitions[competition]));
      }, delay);
    });
  }

  static getMatchesAsync(competition, matchDay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], mockMatches[competition][matchDay]));
      }, delay);
    });
  }

  static getStandingsAsync(competition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], mockStandings[competition]));
      }, delay);
    });
  }
}

export default MatchApi;
