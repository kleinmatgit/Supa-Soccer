import delay from './delay';

const standings = {
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
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/95'
        }
      },
      position: 4,
      teamName: 'Valencia CF',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/7/75/FC_Valencia.svg',
      playedGames: 30,
      points: 62,
      goals: 58,
      goalsAgainst: 31,
      goalDifference: 27,
      wins: 19,
      draws: 5,
      losses: 6,
      home: {
        goals: 32,
        goalsAgainst: 13,
        wins: 11,
        draws: 2,
        losses: 2
      },
      away: {
        goals: 26,
        goalsAgainst: 18,
        wins: 8,
        draws: 3,
        losses: 4
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/90'
        }
      },
      position: 5,
      teamName: 'Real Betis',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/4/43/Real_Betis.svg',
      playedGames: 31,
      points: 49,
      goals: 52,
      goalsAgainst: 53,
      goalDifference: -1,
      wins: 15,
      draws: 4,
      losses: 12,
      home: {
        goals: 30,
        goalsAgainst: 28,
        wins: 8,
        draws: 3,
        losses: 5
      },
      away: {
        goals: 22,
        goalsAgainst: 25,
        wins: 7,
        draws: 1,
        losses: 7
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/94'
        }
      },
      position: 6,
      teamName: 'Villarreal CF',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/7/70/Villarreal_CF_logo.svg',
      playedGames: 30,
      points: 47,
      goals: 40,
      goalsAgainst: 34,
      goalDifference: 6,
      wins: 14,
      draws: 5,
      losses: 11,
      home: {
        goals: 25,
        goalsAgainst: 15,
        wins: 8,
        draws: 2,
        losses: 4
      },
      away: {
        goals: 15,
        goalsAgainst: 19,
        wins: 6,
        draws: 3,
        losses: 7
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/559'
        }
      },
      position: 7,
      teamName: 'Sevilla FC',
      crestURI: 'http://upload.wikimedia.org/wikipedia/en/8/86/Sevilla_cf_200px.png',
      playedGames: 31,
      points: 46,
      goals: 39,
      goalsAgainst: 50,
      goalDifference: -11,
      wins: 14,
      draws: 4,
      losses: 13,
      home: {
        goals: 24,
        goalsAgainst: 18,
        wins: 8,
        draws: 4,
        losses: 3
      },
      away: {
        goals: 15,
        goalsAgainst: 32,
        wins: 6,
        draws: 0,
        losses: 10
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/298'
        }
      },
      position: 8,
      teamName: 'Girona FC',
      crestURI: 'http://upload.wikimedia.org/wikipedia/en/9/90/For_article_Girona_FC.svg',
      playedGames: 30,
      points: 44,
      goals: 44,
      goalsAgainst: 43,
      goalDifference: 1,
      wins: 12,
      draws: 8,
      losses: 10,
      home: {
        goals: 25,
        goalsAgainst: 14,
        wins: 8,
        draws: 3,
        losses: 4
      },
      away: {
        goals: 19,
        goalsAgainst: 29,
        wins: 4,
        draws: 5,
        losses: 6
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/558'
        }
      },
      position: 9,
      teamName: 'RC Celta de Vigo',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/0/0c/Celta_Vigo.svg',
      playedGames: 31,
      points: 43,
      goals: 50,
      goalsAgainst: 43,
      goalDifference: 7,
      wins: 12,
      draws: 7,
      losses: 12,
      home: {
        goals: 26,
        goalsAgainst: 17,
        wins: 7,
        draws: 5,
        losses: 3
      },
      away: {
        goals: 24,
        goalsAgainst: 26,
        wins: 5,
        draws: 2,
        losses: 9
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/278'
        }
      },
      position: 10,
      teamName: 'SD Eibar',
      crestURI: 'http://upload.wikimedia.org/wikipedia/en/7/75/SD_Eibar_logo.svg',
      playedGames: 31,
      points: 40,
      goals: 36,
      goalsAgainst: 45,
      goalDifference: -9,
      wins: 11,
      draws: 7,
      losses: 13,
      home: {
        goals: 25,
        goalsAgainst: 17,
        wins: 7,
        draws: 4,
        losses: 5
      },
      away: {
        goals: 11,
        goalsAgainst: 28,
        wins: 4,
        draws: 3,
        losses: 8
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/82'
        }
      },
      position: 11,
      teamName: 'Getafe CF',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/d/de/Getafe_CF.svg',
      playedGames: 31,
      points: 39,
      goals: 35,
      goalsAgainst: 30,
      goalDifference: 5,
      wins: 10,
      draws: 9,
      losses: 12,
      home: {
        goals: 24,
        goalsAgainst: 11,
        wins: 8,
        draws: 3,
        losses: 5
      },
      away: {
        goals: 11,
        goalsAgainst: 19,
        wins: 2,
        draws: 6,
        losses: 7
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/77'
        }
      },
      position: 12,
      teamName: 'Athletic Club',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/7/7f/Athletic_Club_Bilbao.svg',
      playedGames: 30,
      points: 36,
      goals: 30,
      goalsAgainst: 34,
      goalDifference: -4,
      wins: 8,
      draws: 12,
      losses: 10,
      home: {
        goals: 14,
        goalsAgainst: 9,
        wins: 5,
        draws: 8,
        losses: 2
      },
      away: {
        goals: 16,
        goalsAgainst: 25,
        wins: 3,
        draws: 4,
        losses: 8
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/80'
        }
      },
      position: 13,
      teamName: 'RCD Espanyol',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/a/a7/RCD_Espanyol_De_Barcelona.svg',
      playedGames: 30,
      points: 36,
      goals: 26,
      goalsAgainst: 37,
      goalDifference: -11,
      wins: 8,
      draws: 12,
      losses: 10,
      home: {
        goals: 15,
        goalsAgainst: 13,
        wins: 7,
        draws: 5,
        losses: 4
      },
      away: {
        goals: 11,
        goalsAgainst: 24,
        wins: 1,
        draws: 7,
        losses: 6
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/745'
        }
      },
      position: 14,
      teamName: 'CD Leganes',
      crestURI: 'http://upload.wikimedia.org/wikipedia/en/thumb/0/02/Club_Deportivo_Leganés.png/180px-Club_Deportivo_Leganés.png',
      playedGames: 31,
      points: 36,
      goals: 26,
      goalsAgainst: 39,
      goalDifference: -13,
      wins: 10,
      draws: 6,
      losses: 15,
      home: {
        goals: 15,
        goalsAgainst: 14,
        wins: 7,
        draws: 3,
        losses: 5
      },
      away: {
        goals: 11,
        goalsAgainst: 25,
        wins: 3,
        draws: 3,
        losses: 10
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/263'
        }
      },
      position: 15,
      teamName: 'Deportivo Alavés',
      crestURI: 'http://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_Alaves_logo.svg',
      playedGames: 31,
      points: 35,
      goals: 28,
      goalsAgainst: 45,
      goalDifference: -17,
      wins: 11,
      draws: 2,
      losses: 18,
      home: {
        goals: 17,
        goalsAgainst: 19,
        wins: 8,
        draws: 1,
        losses: 7
      },
      away: {
        goals: 11,
        goalsAgainst: 26,
        wins: 3,
        draws: 1,
        losses: 11
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/92'
        }
      },
      position: 16,
      teamName: 'Real Sociedad de Fútbol',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/5/55/Real_Sociedad_San_Sebastián.svg',
      playedGames: 30,
      points: 34,
      goals: 51,
      goalsAgainst: 52,
      goalDifference: -1,
      wins: 9,
      draws: 7,
      losses: 14,
      home: {
        goals: 33,
        goalsAgainst: 26,
        wins: 6,
        draws: 3,
        losses: 6
      },
      away: {
        goals: 18,
        goalsAgainst: 26,
        wins: 3,
        draws: 4,
        losses: 8
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/88'
        }
      },
      position: 17,
      teamName: 'Levante UD',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/1/1f/Levante_ud.svg',
      playedGames: 30,
      points: 28,
      goals: 26,
      goalsAgainst: 44,
      goalDifference: -18,
      wins: 5,
      draws: 13,
      losses: 12,
      home: {
        goals: 15,
        goalsAgainst: 22,
        wins: 3,
        draws: 6,
        losses: 6
      },
      away: {
        goals: 11,
        goalsAgainst: 22,
        wins: 2,
        draws: 7,
        losses: 6
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/560'
        }
      },
      position: 18,
      teamName: 'RC Deportivo La Coruna',
      crestURI: 'http://upload.wikimedia.org/wikipedia/en/4/4e/RC_Deportivo_La_Coruña_logo.svg',
      playedGames: 31,
      points: 23,
      goals: 29,
      goalsAgainst: 63,
      goalDifference: -34,
      wins: 5,
      draws: 8,
      losses: 18,
      home: {
        goals: 18,
        goalsAgainst: 25,
        wins: 4,
        draws: 5,
        losses: 7
      },
      away: {
        goals: 11,
        goalsAgainst: 38,
        wins: 1,
        draws: 3,
        losses: 11
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/275'
        }
      },
      position: 19,
      teamName: 'UD Las Palmas',
      crestURI: 'http://upload.wikimedia.org/wikipedia/en/2/20/UD_Las_Palmas_logo.svg',
      playedGames: 30,
      points: 21,
      goals: 21,
      goalsAgainst: 61,
      goalDifference: -40,
      wins: 5,
      draws: 6,
      losses: 19,
      home: {
        goals: 14,
        goalsAgainst: 30,
        wins: 4,
        draws: 2,
        losses: 9
      },
      away: {
        goals: 7,
        goalsAgainst: 31,
        wins: 1,
        draws: 4,
        losses: 10
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/84'
        }
      },
      position: 20,
      teamName: 'Málaga CF',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/e/e8/FC_Málaga.svg',
      playedGames: 31,
      points: 17,
      goals: 19,
      goalsAgainst: 48,
      goalDifference: -29,
      wins: 4,
      draws: 5,
      losses: 22,
      home: {
        goals: 11,
        goalsAgainst: 21,
        wins: 3,
        draws: 3,
        losses: 9
      },
      away: {
        goals: 8,
        goalsAgainst: 27,
        wins: 1,
        draws: 2,
        losses: 13
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
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/523'
        }
      },
      position: 4,
      teamName: 'Olympique Lyonnais',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/f/f1/Olympique_Lyon.svg',
      playedGames: 31,
      points: 60,
      goals: 64,
      goalsAgainst: 36,
      goalDifference: 28,
      wins: 17,
      draws: 9,
      losses: 5,
      home: {
        goals: 27,
        goalsAgainst: 16,
        wins: 8,
        draws: 5,
        losses: 2
      },
      away: {
        goals: 37,
        goalsAgainst: 20,
        wins: 9,
        draws: 4,
        losses: 3
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/529'
        }
      },
      position: 5,
      teamName: 'Stade Rennais FC',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/b/b6/Stade_Rennais_Football_Club.svg',
      playedGames: 31,
      points: 46,
      goals: 40,
      goalsAgainst: 37,
      goalDifference: 3,
      wins: 13,
      draws: 7,
      losses: 11,
      home: {
        goals: 15,
        goalsAgainst: 17,
        wins: 6,
        draws: 3,
        losses: 6
      },
      away: {
        goals: 25,
        goalsAgainst: 20,
        wins: 7,
        draws: 4,
        losses: 5
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/518'
        }
      },
      position: 6,
      teamName: 'Montpellier Hérault SC',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/3/35/HSC_Montpellier_Logo.svg',
      playedGames: 31,
      points: 45,
      goals: 31,
      goalsAgainst: 26,
      goalDifference: 5,
      wins: 10,
      draws: 15,
      losses: 6,
      home: {
        goals: 18,
        goalsAgainst: 14,
        wins: 5,
        draws: 8,
        losses: 3
      },
      away: {
        goals: 13,
        goalsAgainst: 12,
        wins: 5,
        draws: 7,
        losses: 3
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/522'
        }
      },
      position: 7,
      teamName: 'OGC Nice',
      crestURI: 'https://upload.wikimedia.org/wikipedia/fr/0/03/OGC_Nice_Logo.png',
      playedGames: 31,
      points: 45,
      goals: 42,
      goalsAgainst: 43,
      goalDifference: -1,
      wins: 13,
      draws: 6,
      losses: 12,
      home: {
        goals: 23,
        goalsAgainst: 21,
        wins: 8,
        draws: 2,
        losses: 6
      },
      away: {
        goals: 19,
        goalsAgainst: 22,
        wins: 5,
        draws: 4,
        losses: 6
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/543'
        }
      },
      position: 8,
      teamName: 'FC Nantes',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/5/50/FC_Nantes_(seit_2008).svg',
      playedGames: 32,
      points: 44,
      goals: 31,
      goalsAgainst: 35,
      goalDifference: -4,
      wins: 12,
      draws: 8,
      losses: 12,
      home: {
        goals: 12,
        goalsAgainst: 13,
        wins: 7,
        draws: 2,
        losses: 6
      },
      away: {
        goals: 19,
        goalsAgainst: 22,
        wins: 5,
        draws: 6,
        losses: 6
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/527'
        }
      },
      position: 9,
      teamName: 'AS Saint-Étienne',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/b/b1/AS_Saint-Etienne_(aktuell).svg',
      playedGames: 32,
      points: 43,
      goals: 37,
      goalsAgainst: 45,
      goalDifference: -8,
      wins: 11,
      draws: 10,
      losses: 11,
      home: {
        goals: 24,
        goalsAgainst: 23,
        wins: 6,
        draws: 7,
        losses: 3
      },
      away: {
        goals: 13,
        goalsAgainst: 22,
        wins: 5,
        draws: 3,
        losses: 8
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/538'
        }
      },
      position: 10,
      teamName: 'EA Guingamp',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/a/ae/EA_Guingamp_Logo.svg',
      playedGames: 32,
      points: 41,
      goals: 36,
      goalsAgainst: 46,
      goalDifference: -10,
      wins: 11,
      draws: 8,
      losses: 13,
      home: {
        goals: 24,
        goalsAgainst: 20,
        wins: 7,
        draws: 6,
        losses: 4
      },
      away: {
        goals: 12,
        goalsAgainst: 26,
        wins: 4,
        draws: 2,
        losses: 9
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/528'
        }
      },
      position: 11,
      teamName: 'Dijon FCO',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/e/e1/FCO_Dijon.svg',
      playedGames: 32,
      points: 41,
      goals: 45,
      goalsAgainst: 60,
      goalDifference: -15,
      wins: 11,
      draws: 8,
      losses: 13,
      home: {
        goals: 28,
        goalsAgainst: 21,
        wins: 9,
        draws: 3,
        losses: 4
      },
      away: {
        goals: 17,
        goalsAgainst: 39,
        wins: 2,
        draws: 5,
        losses: 9
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/526'
        }
      },
      position: 12,
      teamName: 'FC Girondins de Bordeaux',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/e/ea/Girondins_Bordeaux_Logo.svg',
      playedGames: 32,
      points: 40,
      goals: 36,
      goalsAgainst: 42,
      goalDifference: -6,
      wins: 11,
      draws: 7,
      losses: 14,
      home: {
        goals: 20,
        goalsAgainst: 19,
        wins: 7,
        draws: 4,
        losses: 5
      },
      away: {
        goals: 16,
        goalsAgainst: 23,
        wins: 4,
        draws: 3,
        losses: 9
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/530'
        }
      },
      position: 13,
      teamName: 'Amiens SC',
      crestURI: 'https://upload.wikimedia.org/wikipedia/de/0/0d/SC_Amiens_Logo.svg',
      playedGames: 32,
      points: 37,
      goals: 29,
      goalsAgainst: 34,
      goalDifference: -5,
      wins: 10,
      draws: 7,
      losses: 15,
      home: {
        goals: 19,
        goalsAgainst: 16,
        wins: 6,
        draws: 4,
        losses: 6
      },
      away: {
        goals: 10,
        goalsAgainst: 18,
        wins: 4,
        draws: 3,
        losses: 9
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/532'
        }
      },
      position: 14,
      teamName: 'Angers SCO',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/0/0f/SCO_Angers.svg',
      playedGames: 32,
      points: 36,
      goals: 37,
      goalsAgainst: 43,
      goalDifference: -6,
      wins: 8,
      draws: 12,
      losses: 12,
      home: {
        goals: 21,
        goalsAgainst: 24,
        wins: 5,
        draws: 5,
        losses: 6
      },
      away: {
        goals: 16,
        goalsAgainst: 19,
        wins: 3,
        draws: 7,
        losses: 6
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/514'
        }
      },
      position: 15,
      teamName: 'SM Caen',
      crestURI: 'https://upload.wikimedia.org/wikipedia/fr/7/79/LogoSmc2013.png',
      playedGames: 32,
      points: 35,
      goals: 23,
      goalsAgainst: 42,
      goalDifference: -19,
      wins: 10,
      draws: 5,
      losses: 17,
      home: {
        goals: 16,
        goalsAgainst: 17,
        wins: 7,
        draws: 3,
        losses: 6
      },
      away: {
        goals: 7,
        goalsAgainst: 25,
        wins: 3,
        draws: 2,
        losses: 11
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/576'
        }
      },
      position: 16,
      teamName: 'RC Strasbourg Alsace',
      crestURI: 'https://upload.wikimedia.org/wikipedia/de/8/84/Racing_Club_Strasbourg.svg',
      playedGames: 32,
      points: 34,
      goals: 38,
      goalsAgainst: 57,
      goalDifference: -19,
      wins: 8,
      draws: 10,
      losses: 14,
      home: {
        goals: 23,
        goalsAgainst: 23,
        wins: 6,
        draws: 5,
        losses: 5
      },
      away: {
        goals: 15,
        goalsAgainst: 34,
        wins: 2,
        draws: 5,
        losses: 9
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/511'
        }
      },
      position: 17,
      teamName: 'Toulouse FC',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Toulouse_Logo.svg',
      playedGames: 32,
      points: 30,
      goals: 29,
      goalsAgainst: 44,
      goalDifference: -15,
      wins: 7,
      draws: 9,
      losses: 16,
      home: {
        goals: 17,
        goalsAgainst: 17,
        wins: 5,
        draws: 5,
        losses: 6
      },
      away: {
        goals: 12,
        goalsAgainst: 27,
        wins: 2,
        draws: 4,
        losses: 10
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/531'
        }
      },
      position: 18,
      teamName: 'ES Troyes AC',
      crestURI: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/ES_Troyes_AC.svg',
      playedGames: 32,
      points: 29,
      goals: 25,
      goalsAgainst: 46,
      goalDifference: -21,
      wins: 8,
      draws: 5,
      losses: 19,
      home: {
        goals: 12,
        goalsAgainst: 15,
        wins: 6,
        draws: 3,
        losses: 7
      },
      away: {
        goals: 13,
        goalsAgainst: 31,
        wins: 2,
        draws: 2,
        losses: 12
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/521'
        }
      },
      position: 19,
      teamName: 'OSC Lille',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/0/08/LOSC_Lille_Crest_2012.png',
      playedGames: 32,
      points: 28,
      goals: 30,
      goalsAgainst: 51,
      goalDifference: -21,
      wins: 7,
      draws: 7,
      losses: 18,
      home: {
        goals: 17,
        goalsAgainst: 23,
        wins: 4,
        draws: 5,
        losses: 7
      },
      away: {
        goals: 13,
        goalsAgainst: 28,
        wins: 3,
        draws: 2,
        losses: 11
      }
    },
    {
      _links: {
        team: {
          href: 'http://api.football-data.org/v1/teams/545'
        }
      },
      position: 20,
      teamName: 'FC Metz',
      crestURI: 'http://upload.wikimedia.org/wikipedia/de/b/ba/FC_Metz_Logo.svg',
      playedGames: 31,
      points: 22,
      goals: 29,
      goalsAgainst: 58,
      goalDifference: -29,
      wins: 5,
      draws: 7,
      losses: 19,
      home: {
        goals: 14,
        goalsAgainst: 25,
        wins: 3,
        draws: 3,
        losses: 9
      },
      away: {
        goals: 15,
        goalsAgainst: 33,
        wins: 2,
        draws: 4,
        losses: 10
      }
    }
  ]
};

class StandingApi {
  static getCompetitionStandingsSync(competition) {
    return standings[competition];
  }

  static getCompetitionStandings(competition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], standings[competition]));
      }, delay);
    });
  }
}

export default StandingApi;
