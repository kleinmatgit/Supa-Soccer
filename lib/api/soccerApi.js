import request from 'request';

const urlProxy = 'https://cors-anywhere.herokuapp.com/';

const urlRoot = 'http://api.football-data.org/v2';

const competitionIds = {
  'Ligue 1': 2015,
  'La Liga': 2014,
  'Serie A': 456,
  'Bundesliga': 452,
  'Premier League': 445
};

// Set the headers
var headers = {
  'X-Auth-Token': '0111991d3f1f4e85adc734b02b8b9889',
};

// Configure the request
var options = {
  //url: 'http://samwize.com',
  method: 'GET',
  headers: headers,
  //qs: {'key1': 'xxx', 'key2': 'yyy'}
};

function getBodyAsJson(url) {
  return new Promise((resolve, reject) => {
    options.url = urlProxy + url;
    request(options, (error, response, body) => {
      if(error) {
        return reject(error);
      }
      if(response.statusCode !== 200) {
        return reject('Error - StatusCode = ' + response.statusCode);
      }
      resolve(JSON.parse(body));
    });
  });
}

class MatchApi {

    // Function requiring testing - START
    // any other way to test it without including it in the API?
  static getUrlCompetition(competition) {
    return urlRoot + '/competitions/' + competitionIds[competition];
  }
  static getUrlMatches(competition, matchDay) {
    return this.getUrlCompetition(competition) + '/matches?matchday=' + matchDay;
  }
  static getUrlStandings(competition) {
    return this.getUrlCompetition(competition) + '/standings';
  }
  static getUrlTeams(competition) {
    return this.getUrlCompetition(competition) + '/teams';
  }
  static getMatchId(match) {
    let href = match._links.self.href;
    return href.substr(href.lastIndexOf('/') + 1);
  }
    // Function requiring testing - END

  static getCompetition(competition) {
    return new Promise((resolve, reject) => {
      getBodyAsJson(this.getUrlCompetition(competition)).then(competition => { resolve(Object.assign({}, competition)); })
            .catch(error => { return reject(error); });
    });
  }

  static getCompetitionMatches(competition, matchday) {
    return new Promise((resolve, reject) => {
      getBodyAsJson(this.getUrlMatches(competition, matchday)).then(matchesObj => { resolve(Object.assign([], matchesObj.matches)); })
            .catch(error => { return reject(error); });
    });
  }

  static getCompetitionStandings(competition) {
    return new Promise((resolve, reject) => {
      getBodyAsJson(this.getUrlStandings(competition)).then(standingsObj => { resolve(Object.assign([], standingsObj.standings[0].table)); })
            .catch(error => { return reject(error); });
    });
  }

  static getCompetitionTeams(competition) {
    return new Promise((resolve, reject) => {
      getBodyAsJson(this.getUrlTeams(competition)).then(teamsObj => { resolve(Object.assign([], teamsObj.teams)); })
            .catch(error => { return reject(error); });
    });
  }
}

export default MatchApi;
