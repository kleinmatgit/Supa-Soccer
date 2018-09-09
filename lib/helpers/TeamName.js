const teams = {
  'Paris Saint-Germain FC': {display: 'PSG'},
  'FC Barcelona': {display: 'Barcelona'},
  'Stade Rennais FC 1901': {display: 'Rennes'},
  'Angers SCO': {display: 'Angers'},
  'Stade de Reims': {display: 'Reims'},
  'Olympique Lyonnais': {display: 'Lyon'},
  'SM Caen': {display: 'Caen'},
  'OGC de Nice Côte d\'Azur': {display: 'Nice'},
  'Dijon Football Côte d\'Or': {display: 'Dijon'},
  'FC Nantes': {display: 'Nantes'},
  'RC Strasbourg Alsace': {display: 'Strasbourg'},
  'AS Saint-Étienne': {display: 'Saint-Étienne', crest: 'saint-etienne'},
  'Toulouse FC': {display: 'Toulouse'},
  'FC Girondins de Bordeaux': {display: 'Bordeaux'},
  'AS Monaco FC': {display: 'Monaco'},
  'Lille OSC': {display: 'Lille'},
  'En Avant Guingamp': {display: 'Guingamp'},
  'Nîmes Olympique': {display: 'Nîmes', crest: 'nimes'},
  'Olympique de Marseille': {display: 'Marseille'},
  'Amiens SC': {display: 'Amiens'},
  'Montpellier HSC': {display: 'Montpellier'},

  'Real Madrid CF': {display: 'Real Madrid'},
  'Barcelona': {display: 'Barcelona'},
  'Valencia CF': {display: 'Valencia'},
  'Club Atlético de Madrid': {display: 'Atlético Madrid', crest: 'atletico-madrid'},
  'Levante UD': {display: 'Levante'},
  'Sevilla FC': {display: 'Sevilla'},
  'Athletic Club': {display: 'Athletic Bilbao'},
  'Getafe CF': {display: 'Getafe CF', crest: 'getafe'},
  'Real Sociedad de Fútbol': {display: 'Real Sociedad'},
  'Real Betis Balompié': {display: 'Real Betis'},
  'RCD Espanyol de Barcelona': {display: 'Espanyol'},
  'Rayo Vallecano de Madrid': {display: 'Vallecano'},
  'RC Celta de Vigo': {display: 'Celta Vigo'},
  'Real Valladolid CF': {display: 'Valladolid'},
  'Girona FC': {display: 'Girona'},
  'Villarreal CF': {display: 'Villarreal'},
  'SD Huesca': {display: 'Huesca'},
  'Deportivo Alavés': {display: 'Alavés', crest: 'alaves'},
  'CD Leganés': {display: 'Leganes'},
  'SD Eibar': {display: 'Eibar'},
};

class TeamName {

  static getDisplayName(teamName){
    if(teamName in teams) {
      return teams[teamName].display;
    }
    return teamName;
  }

  static getCrestSrc(teamName){
    let crest = '';
    if(teamName in teams) {
      let team = teams[teamName];
      'crest' in team ? crest = team.crest : crest = team.display;
    } else {
      return '';
    }
    return 'images/' + crest.toLowerCase().replace(' ','-') + '.png';
  }

}

export default TeamName;
