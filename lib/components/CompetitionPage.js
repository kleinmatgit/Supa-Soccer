import React from 'react';
import {PropTypes} from 'prop-types';
import MatchList from 'components/MatchList';
// import StandingList from 'components/StandingList';
// import TeamList from 'components/TeamList';
//import MatchApi from '../api/mockApi';
import {connect} from 'react-redux';
// import DisplayMode from 'constants/displayMode';
import {bindActionCreators} from 'redux';
import * as matchesActions from 'actions/matchesActions';
//import * as standingsActions from 'actions/standingsActions';

class CompetitionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // const competition = 'Ligue 1';

    this.state = {
      // competition,
      matches: [],
      // standings: [],
      // teams: [],
      // mode: DisplayMode.MATCHES,
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

  onClickMatches = () => {
    debugger;
    this.props.matchesActions.loadMatches();
  }

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

  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <button onClick={this.onClickMatches}>Matches</button>
  //         {' | '}
  //         <button onClick={this.onClickStandings}>Standings</button>
  //         {' | '}
  //         <button onClick={this.onClickTeams}>Teams</button>
  //       </div>
  //       <h1>{this.state.competition}</h1>
  //       {this.state.mode === DisplayMode.MATCHES
  //         ? <MatchList matches={this.props.matches} />
  //         : this.state.mode === DisplayMode.STANDINGS
  //           ? <StandingList standings={this.props.standings} />
  //           : <TeamList teams={this.state.teams} />
  //       }
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickMatches}>Matches</button>
        </div>
        <h1>Ligue 1</h1>
        <MatchList matches={this.props.matches} />
      </div>
    );
  }
}

CompetitionPage.propTypes = {
  matches: PropTypes.array.isRequired,
  // standings: PropTypes.array.isRequired,
  matchesActions: PropTypes.object.isRequired,
  // standingsActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    matches: state.matches,
    // standings: state.standings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    matchesActions: bindActionCreators(matchesActions, dispatch),
    // standingsActions: bindActionCreators(standingsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPage);
