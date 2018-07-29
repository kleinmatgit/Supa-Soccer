import React from 'react';
import {PropTypes} from 'prop-types';
import MatchList from 'components/MatchList';
import StandingList from 'components/StandingList';
import TeamList from 'components/TeamList';
import {connect} from 'react-redux';
import DisplayMode from 'constants/displayMode';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';
import LoadingDots from 'components/LoadingDots';

class CompetitionPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onClickMatches = () => {
    this.props.competitionActions.setDisplayMode(DisplayMode.MATCHES);
    if(!this.props.matchesLoaded) {
      this.props.competitionActions.loadMatches();
    }
  }

  onClickStandings = () => {
    this.props.competitionActions.setDisplayMode(DisplayMode.STANDINGS);
    if(!this.props.standingsLoaded) {
      this.props.competitionActions.loadStandings();
    }
  }

  onClickTeams = () => {
    this.props.competitionActions.setDisplayMode(DisplayMode.TEAMS);
    if(!this.props.teamsLoaded) {
      this.props.competitionActions.loadTeams();
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickMatches}>Matches</button>
          {' | '}
          <button onClick={this.onClickStandings}>Standings</button>
          {' | '}
          <button onClick={this.onClickTeams}>Teams</button>
        </div>
        <h1>{this.props.competition}</h1>
        {this.props.displayMode === DisplayMode.MATCHES
          ? this.props.matchesLoading
            ? <LoadingDots dots={5} />
            : <MatchList matches={this.props.matches} />
          : this.props.displayMode === DisplayMode.STANDINGS
            ? this.props.standingsLoading
              ? <LoadingDots dots={5} />
              : <StandingList standings={this.props.standings} />
            : this.props.teamsLoading
              ? <LoadingDots dots={5} />
              : <TeamList teams={this.props.teams} />
        }
      </div>
    );
  }
}

CompetitionPage.propTypes = {
  competitionActions: PropTypes.object.isRequired,
  competition: PropTypes.string.isRequired,
  displayMode: PropTypes.number.isRequired,
  matches: PropTypes.array.isRequired,
  matchesLoading: PropTypes.bool.isRequired,
  matchesLoaded: PropTypes.bool.isRequired,
  standings: PropTypes.array.isRequired,
  standingsLoading: PropTypes.bool.isRequired,
  standingsLoaded: PropTypes.bool.isRequired,
  teams: PropTypes.array.isRequired,
  teamsLoading: PropTypes.bool.isRequired,
  teamsLoaded: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    competition: state.competition.name,
    displayMode: state.competition.displayMode,
    matches: state.competition.matches,
    matchesLoading: state.competition.matchesLoading,
    matchesLoaded: state.competition.matchesLoaded,
    standings: state.competition.standings,
    standingsLoading: state.competition.standingsLoading,
    standingsLoaded: state.competition.standingsLoaded,
    teams: state.competition.teams,
    teamsLoading: state.competition.teamsLoading,
    teamsLoaded: state.competition.teamsLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    competitionActions: bindActionCreators(competitionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPage);
