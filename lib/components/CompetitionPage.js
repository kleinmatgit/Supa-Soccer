import React from 'react';
import {PropTypes} from 'prop-types';
import MatchArea from 'components/MatchArea';
import StandingList from 'components/StandingList';
import TeamList from 'components/TeamList';
import {connect} from 'react-redux';
import DisplayMode from 'constants/displayMode';
import LoadingDots from 'components/LoadingDots';

class CompetitionPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>{this.props.competition}</h1>
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
    );
  }
}

CompetitionPage.propTypes = {
  competition: PropTypes.string.isRequired,
  displayMode: PropTypes.number.isRequired,
  matches: PropTypes.array.isRequired,
  matchesLoading: PropTypes.bool.isRequired,
  standings: PropTypes.array.isRequired,
  standingsLoading: PropTypes.bool.isRequired,
  teams: PropTypes.array.isRequired,
  teamsLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    competition: state.competition.name,
    displayMode: state.competition.displayMode,
    matches: state.competition.matches,
    matchesLoading: state.competition.matchesLoading,
    standings: state.competition.standings,
    standingsLoading: state.competition.standingsLoading,
    teams: state.competition.teams,
    teamsLoading: state.competition.teamsLoading,
  };
}

export default connect(mapStateToProps)(CompetitionPage);
