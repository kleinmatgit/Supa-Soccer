import request from 'request';

const urlProxy = 'https://cors-anywhere.herokuapp.com/';

const urlRoot = 'http://api.football-data.org/v1';

const competitionIds = {
    'Ligue 1': 450,
    'La Liga': 455,
    'Serie A': 456,
    'Bundesliga': 452,
    'Premier League': 445
};

function getBodyAsJson(url) {
    return new Promise((resolve, reject) => {
        request.get(urlProxy + url, (error, response, body) => {
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
        return this.getUrlCompetition(competition) + '/fixtures?matchday=' + matchDay;
    }
    static getUrlStandings(competition) {
        return this.getUrlCompetition(competition) + '/leagueTable';
    }
    static getMatchId(match) {
        let href = match._links.self.href;
        return href.substr(href.lastIndexOf('/') + 1);
    }
    // Function requiring testing - END

    static getCompetition(competition) {
        return new Promise((resolve, reject) => {
            getBodyAsJson(this.getUrlCompetition(competition)).then(competition => { resolve(Object.assign([], competition)); })
            .catch(error => { return reject(error); });
        });
    }

    static getCompetitionMatches(competition, matchDay) {
        return new Promise((resolve, reject) => {
            getBodyAsJson(this.getUrlMatches(competition, matchDay)).then(matchesObj => {
                matchesObj.fixtures.map(match => match.id = this.getMatchId(match));
                resolve(Object.assign([], matchesObj.fixtures));
            })
            .catch(error => { return reject(error); });
        });
    }

    static getCompetitionStandings(competition) {
        return new Promise((resolve, reject) => {
            getBodyAsJson(this.getUrlStandings(competition)).then(standingObj => { resolve(Object.assign([], standingObj.standing)); })
            .catch(error => { return reject(error); });
        });
    }
}

export default MatchApi;