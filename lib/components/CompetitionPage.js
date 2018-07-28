import React from 'react';
import {PropTypes} from 'prop-types';
import MatchList from 'components/MatchList';
import StandingList from 'components/StandingList';
import TeamList from 'components/TeamList';
import {connect} from 'react-redux';
import DisplayMode from 'constants/displayMode';
import {bindActionCreators} from 'redux';
import * as matchesActions from 'actions/matchesActions';
import * as standingsActions from 'actions/standingsActions';
import * as teamsActions from 'actions/teamsActions';

class CompetitionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // competition,
      //matches: [],
      // standings: [],
      // teams: [],
      mode: DisplayMode.MATCHES,
      // matchesLoaded: false,
      // standingsLoaded: false,
      // teamsLoaded: false,
    };
    //this.initPage();
  }

  // initPage = async () => {
  //   const matches = await MatchApi.getCompetitionMatches('Ligue 1');
  //   this.setState({
  //     matches,
  //   });
  // }

  // handleClickMatches = async () => {
  //   this.setState({ mode: DisplayMode.MATCHES });
  //   if(!this.state.matchesLoaded)
  //   {
  //     const matches = await MatchApi.getCompetitionMatches(this.props.competition);
  //     this.setState({
  //       matches,
  //       matchesLoaded: true,
  //     });
  //   }
  // }
  //
  // handleClickStandings = async () => {
  //   this.setState({ mode: DisplayMode.STANDINGS });
  //   if(!this.state.standingsLoaded)
  //   {
  //     const standings = await MatchApi.getCompetitionStandings(this.props.competition);
  //     this.setState({
  //       standings,
  //       standingsLoaded: true,
  //     });
  //   }
  // }
  //

  // onClickStandings = () => {
  //   this.props.standingsActions.loadStandings(this.state.competition);
  // }
  //
  // onClickTeams = async () => {
  //   this.setState({ mode: DisplayMode.TEAMS });
  //   if(!this.state.teamsLoaded)
  //   {
  //     const teams = await MatchApi.getCompetitionTeams(this.props.competition);
  //     this.setState({
  //       teams,
  //       standingsLoaded: true,
  //     });
  //   }
  // }

  onClickMatches = () => {
    this.setState({ mode: DisplayMode.MATCHES });
    this.props.matchesActions.loadMatches();
  }

  onClickStandings = () => {
    this.setState({ mode: DisplayMode.STANDINGS });
    this.props.standingsActions.loadStandings();
  }

  onClickTeams = () => {
    this.setState({ mode: DisplayMode.TEAMS });
    this.props.teamsActions.loadTeams();
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
  matchesActions: PropTypes.object.isRequired,
  standingsActions: PropTypes.object.isRequired,
  teamsActions: PropTypes.object.isRequired,
  //matchesLoaded: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    competition: state.competition,
    matches: state.matches,
    standings: state.standings,
    teams: state.teams,
    //matchesLoaded: state.matchesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    matchesActions: bindActionCreators(matchesActions, dispatch),
    standingsActions: bindActionCreators(standingsActions, dispatch),
    teamsActions: bindActionCreators(teamsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPage);
