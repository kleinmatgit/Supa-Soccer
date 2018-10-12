const competitions = {
  'Ligue 1': 2015,
  'La Liga': 2014,
  'Serie A': 2019,
  'Bundesliga': 2002,
  'Premier League': 2021,
  'UEFA Champions League': 2001,
};

class CompetitionHelper {

  static getId(name){
    return competitions[name];
  }

}

export default CompetitionHelper;
