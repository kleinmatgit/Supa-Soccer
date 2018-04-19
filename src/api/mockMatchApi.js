import delay from './delay';

const matches = {
    'Ligue 1': [
        {
            id: 161356,
            date: "2018-04-06T18:45:00Z",
            status: "FINISHED",
            homeTeamName: "AS Saint-Étienne",
            awayTeamName: "Paris Saint-Germain",
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
            id: 161353,
            date: "2018-04-07T15:00:00Z",
            status: "FINISHED",
            homeTeamName: "AS Monaco FC",
            awayTeamName: "FC Nantes",
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
            id: 161348,
            date: "2018-04-07T18:00:00Z",
            status: "FINISHED",
            homeTeamName: "Amiens SC",
            awayTeamName: "SM Caen",
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

    'La Liga': [
        {
            id: 163218,
            date: "2017-08-19T18:15:00Z",
            status: "FINISHED",
            homeTeamName: "Girona FC",
            awayTeamName: "Club Atlético de Madrid",
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
            id: 163222,
            date: "2017-08-19T20:15:00Z",
            status: "FINISHED",
            homeTeamName: "Sevilla FC",
            awayTeamName: "RCD Espanyol",
            result: {
                goalsHomeTeam: 1,
                goalsAwayTeam: 1
            }
        },

        {
            id: 163215,
            date: "2017-08-20T18:15:00Z",
            status: "FINISHED",
            homeTeamName: "FC Barcelona",
            awayTeamName: "Real Betis",
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
};

class MatchApi {
    static getCompetitionMatchesSync(competition) {
        return matches[competition];
    }
    
    static getCompetitionMatches(competition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], matches[competition]));
            }, delay);
        });
    }
}
  
export default MatchApi;