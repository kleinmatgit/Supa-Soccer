import React from 'react';
import {PropTypes} from 'prop-types';
import MatchList from 'components/MatchList';
import StandingList from 'components/StandingList';
import TeamList from 'components/TeamList';
import {connect} from 'react-redux';
import DisplayMode from 'constants/displayMode';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';

class CompetitionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mode: DisplayMode.MATCHES,
    };
  }

  onClickMatches = () => {
    this.setState({ mode: DisplayMode.MATCHES });
    if(!this.props.matchesLoaded) {
      this.props.competitionActions.loadMatches();
    }
  }

  onClickStandings = () => {
    this.setState({ mode: DisplayMode.STANDINGS });
    if(!this.props.standingsLoaded) {
      this.props.competitionActions.loadStandings();
    }
  }

  onClickTeams = () => {
    this.setState({ mode: DisplayMode.TEAMS });
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
        {this.state.mode === DisplayMode.MATCHES
          ? <MatchList matches={this.props.matches} />
          : this.state.mode === DisplayMode.STANDINGS
            ? <StandingList standings={this.props.standings} />
            : <TeamList teams={this.props.teams} />
        }
      </div>
    );
  }
}

CompetitionPage.propTypes = {
  competition: PropTypes.string.isRequired,
  matches: PropTypes.array.isRequired,
  standings: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
  competitionActions: PropTypes.object.isRequired,
  matchesLoaded: PropTypes.bool.isRequired,
  standingsLoaded: PropTypes.bool.isRequired,
  teamsLoaded: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    competition: state.competition.name,
    matches: state.competition.matchState.matches,
    standings: state.competition.standingState.standings,
    teams: state.competition.teamState.teams,
    matchesLoaded: state.competition.matchState.matchesLoaded,
    standingsLoaded: state.competition.standingState.standingsLoaded,
    teamsLoaded: state.competition.teamState.teamsLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    competitionActions: bindActionCreators(competitionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPage);
