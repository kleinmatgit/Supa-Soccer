import React from 'react';
import MatchArea from './MatchArea';
import StandingList from './StandingList';
import ErrorArea from './ErrorArea';
import MatchApi from '../api/mockMatchApi';
import * as comp from '../constants/competitions';

const MATCH_MODE = 0;
const STANDING_MODE = 1;
const ERROR_MODE = 2;

class CompetitionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    const competition = comp.LIGUE1;

    this.state = {
      competition,
      currentMatchDay: -1,
      latestMatchDay: -1,
      numberOfMatchDay: -1,
      matches: [],
      standings: [],
      mode: MATCH_MODE
    };

    this.handleClickCompetition = this.handleClickCompetition.bind(this);

    this.handleClickLigue1 = this.handleClickLigue1.bind(this);
    this.handleClickLaLiga = this.handleClickLaLiga.bind(this);
    this.handleClickSerieA = this.handleClickSerieA.bind(this);
    this.handleClickBundesliga = this.handleClickBundesliga.bind(this);
    this.handleClickPremierLeague = this.handleClickPremierLeague.bind(this);

    this.handleClickMatches = this.handleClickMatches.bind(this);
    this.handleClickStandings = this.handleClickStandings.bind(this);

    this.handleChangeStage = this.handleChangeStage.bind(this);

    this.handleError = this.handleError.bind(this);

    // init to LIGUE 1 matches
    this.handleClickCompetition(comp.LIGUE1);
  }

  handleClickCompetition(competition) {

    MatchApi.getCompetitionAsync(competition).then(competitionObj => {

      this.setState({
        currentMatchDay: competitionObj.currentMatchday,
        latestMatchDay: competitionObj.currentMatchday,
        numberOfMatchDay: competitionObj.numberOfMatchdays
      });

      MatchApi.getMatchesAsync(competition, this.state.currentMatchDay).then(matches => {
        this.setState({
          competition,
          matches,
          mode: MATCH_MODE
        });
      }).catch(error => { this.handleError(error); });
    }).catch(error => { this.handleError(error); });

    MatchApi.getStandingsAsync(competition).then(standings => {
      this.setState({
        standings
      });
    }).catch(error => { this.handleError(error); });
  }

  handleError(error) {
    // throw(error);
    this.setState({
      error,
      mode: ERROR_MODE
    });
  }

  handleClickMatches() {
    this.setState({
      mode: MATCH_MODE
    });
  }

  handleClickStandings() {
    this.setState({
      mode: STANDING_MODE
    });
  }

  handleChangeStage = (event) => {
    const newCurrentMatchDay = event.target.value;
    this.setState({
      currentMatchDay: newCurrentMatchDay
    });

    MatchApi.getMatchesAsync(this.state.competition, newCurrentMatchDay).then(matches => {
      this.setState({
        matches
      });
    }).catch(error => { this.handleError(error); });
  }

  handleClickLigue1() { this.handleClickCompetition(comp.LIGUE1); }
  handleClickLaLiga() { this.handleClickCompetition(comp.LALIGA); }
  handleClickSerieA() { this.handleClickCompetition(comp.SERIEA); }
  handleClickBundesliga() { this.handleClickCompetition(comp.BUNDESLIGA); }
  handleClickPremierLeague() { this.handleClickCompetition(comp.PREMIER_LEAGUE); }

  render() {
    return (
      <div>
        <nav class="">
          <button
            onClick={this.handleClickLigue1}
            className="btn btn-primary btn-lg">{comp.LIGUE1}</button>
          {" | "}
          <button
            onClick={this.handleClickLaLiga}
            className="btn btn-primary btn-lg">{comp.LALIGA}</button>
          {" | "}
          <button
            onClick={this.handleClickSerieA}
            className="btn btn-primary btn-lg">{comp.SERIEA}</button>
          {" | "}
          <button
            onClick={this.handleClickBundesliga}
            className="btn btn-primary btn-lg">{comp.BUNDESLIGA}</button>
          {" | "}
          <button
            onClick={this.handleClickPremierLeague}
            className="btn btn-primary btn-lg">{comp.PREMIER_LEAGUE}</button>
        </nav>
        <br />
        <nav>
          <button
            onClick={this.handleClickMatches}
            className="btn btn-secondary btn-sm">Matches</button>
          {" | "}
          <button
            onClick={this.handleClickStandings}
            className="btn btn-secondary btn-sm">Standings</button>
        </nav>
        <h1>{this.state.competition}</h1>
        {this.state.mode === ERROR_MODE
          ? <ErrorArea error={this.state.error} />
          : this.state.mode === MATCH_MODE
            ? <MatchArea matches={this.state.matches}
              latestMatchDay={this.state.latestMatchDay}
              numberOfMatchDay={this.state.numberOfMatchDay}
              handleOnChange={this.handleChangeStage} />
            : <StandingList standings={this.state.standings} />
        }
      </div>
    );
  }
}

export default CompetitionPage;