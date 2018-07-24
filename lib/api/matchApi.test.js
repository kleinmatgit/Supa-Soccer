import assert from 'assert';
import MatchApi from './matchApi';
import * as comp from '../constants/competitions';

const expectedBundesligaUrl =
    'http://api.football-data.org/v1/competitions/452';

const expectedLaLigaMatchesUrl =
    'http://api.football-data.org/v1/competitions/455/fixtures?matchday=32';

const expectedLigue1StandingsUrl =
    'http://api.football-data.org/v1/competitions/450/leagueTable';

it('should return Bundesliga competition url', function () {
  assert.equal(MatchApi.getUrlCompetition(comp.BUNDESLIGA), expectedBundesligaUrl);
});

it('should return La Liga matches url (matchDay=32)', function () {
  assert.equal(MatchApi.getUrlMatches(comp.LALIGA, 32), expectedLaLigaMatchesUrl);
});

it('should return Ligue 1 standings url', function () {
  assert.equal(MatchApi.getUrlStandings(comp.LIGUE1), expectedLigue1StandingsUrl);
});

const mockMatch = {
  _links: {
    self: {
      href: 'http://api.football-data.org/v1/fixtures/162917'
    },
    competition: {
      href: 'http://api.football-data.org/v1/competitions/455'
    },
    homeTeam: {
      href: 'http://api.football-data.org/v1/teams/560'
    },
    awayTeam: {
      href: 'http://api.football-data.org/v1/teams/84'
    }
  },
  date: '2018-04-06T19:00:00Z',
  status: 'FINISHED',
  matchday: 31,
  homeTeamName: 'RC Deportivo La Coruna',
  awayTeamName: 'Málaga CF',
  result: {
    goalsHomeTeam: 3,
    goalsAwayTeam: 2,
    halfTime: {
      goalsHomeTeam: 1,
      goalsAwayTeam: 1
    }
  },
  odds: null
};

it('should return matchId = 162917', function () {
  assert.equal(MatchApi.getMatchId(mockMatch), 162917);
});