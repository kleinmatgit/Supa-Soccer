import assert from 'assert';
import MatchApi from 'api/mockApi';
import * as comp from 'constants/competitions';
import CompetitionHelper from 'helpers/CompetitionHelper';

const fakeUrlRoot = 'http://api.football-data.org/v48';

const expectedBundesligaUrl = fakeUrlRoot + '/competitions/' + CompetitionHelper.getId(comp.BUNDESLIGA);

const expectedLaLigaMatchesUrl = fakeUrlRoot + '/competitions/' + CompetitionHelper.getId(comp.LALIGA) + '/matches?matchday=32';

const expectedLigue1StandingsUrl = fakeUrlRoot + '/competitions/' + CompetitionHelper.getId(comp.LIGUE1) + '/standings';

describe('MatchApi', () => {
  it('should return Bundesliga competition url', function () {
    assert.equal(MatchApi.getUrlCompetition(comp.BUNDESLIGA), expectedBundesligaUrl);
  });

  it('should return La Liga matches url (matchDay=32)', function () {
    assert.equal(MatchApi.getUrlMatches(comp.LALIGA, 32), expectedLaLigaMatchesUrl);
  });

  it('should return Ligue 1 standings url', function () {
    assert.equal(MatchApi.getUrlStandings(comp.LIGUE1), expectedLigue1StandingsUrl);
  });

  const mockMatch = MatchApi.getMockMatch();

  it('should return matchId = 238996', function () {
    assert.equal(MatchApi.getMatchId(mockMatch), 238996);
  });

  it('exposes competition as an object', () => {
    const competitionName = comp.PREMIER_LEAGUE;
    return MatchApi.getCompetition(competitionName).then(competition => {
      expect(competition).toHaveProperty('id');
      expect(competition.id).toBe(CompetitionHelper.getId(competitionName));

      expect(competition).toHaveProperty('name');
      expect(competition.name).toBe(competitionName);
    });
  });

  it('exposes matches as a list of match objects', () => {
    const competitionName = comp.PREMIER_LEAGUE;
    const matchday = 2;
    return MatchApi.getCompetitionMatches(competitionName, matchday).then(matches => {

      assert(matches instanceof Array);
      assert(matches.length > 0);

      const match = matches[0];
      expect(match).toHaveProperty('id');
      expect(match.id).toBe(233039);

      expect(match).toHaveProperty('status');
      expect(match.status).toBe('FINISHED');

      expect(match).toHaveProperty('homeTeam');
      expect(match.homeTeam.name).toBe('Cardiff City FC');
    });
  });

  it('exposes standings as a list of objects', () => {
    const competitionName = comp.PREMIER_LEAGUE;
    return MatchApi.getCompetitionStandings(competitionName).then(standings => {

      assert(standings instanceof Array);
      assert(standings.length > 0);

      const standing = standings[0];
      expect(standing).toHaveProperty('position');
      expect(standing.position).toBe(1);

      expect(standing).toHaveProperty('team');
      expect(standing.team.name).toBe('Chelsea FC');

      expect(standing).toHaveProperty('points');
      expect(standing.points).toBe(15);
    });
  });

});
