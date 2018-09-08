import React from 'react';
import {PropTypes} from 'prop-types';
import CompetitionButtons from 'components/CompetitionButtons';
import MatchArea from 'components/MatchArea';
import StandingList from 'components/StandingList';
import TeamList from 'components/TeamList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';
import DisplayMode from 'constants/displayMode';
import LoadingDots from 'components/LoadingDots';

// import {Grid, Row} from 'react-bootstrap';

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
        <h1 className="competition-title">{this.props.competition}</h1>
        <CompetitionButtons
          onClickMatches={this.onClickMatches}
          onClickStandings={this.onClickStandings}
          onClickTeams={this.onClickTeams}
        />
        <div className="competition-data-area">
          {this.props.displayMode === DisplayMode.MATCHES
            ? <MatchArea matchesLoading={this.props.matchesLoading} matches={this.props.matches} />
            : this.props.displayMode === DisplayMode.STANDINGS
              ? this.props.standingsLoading
                ? <LoadingDots dots={5} />
                : <StandingList standings={this.props.standings} />
              : this.props.teamsLoading
                ? <LoadingDots dots={5} />
                : <TeamList teams={this.props.teams} />
          }
        </div>
      </div>
    );
  }
}

CompetitionPage.propTypes = {
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
  competitionActions: PropTypes.object.isRequired,
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
