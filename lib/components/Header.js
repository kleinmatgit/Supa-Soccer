import React, { Component } from 'react';
import * as comp from 'constants/competitions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';
import DisplayMode from 'constants/displayMode';

class Header extends Component {

  onLigue1Click = () => { this.onCompetitionClick(comp.LIGUE1); }
  onLaLigaClick = () => { this.onCompetitionClick(comp.LALIGA); }

  onCompetitionClick = (competition) => {
    if(this.props.competition !== competition) {
      this.props.competitionActions.loadCompetition(competition);
      switch (this.props.displayMode) {
      case DisplayMode.MATCHES:
        this.props.competitionActions.loadMatches();
        break;
      case DisplayMode.STANDINGS:
        this.props.competitionActions.loadStandings();
        break;
      default:
        this.props.competitionActions.loadTeams();
        break;
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onLigue1Click}>{comp.LIGUE1}</button>
        {' | '}
        <button onClick={this.onLaLigaClick}>{comp.LALIGA}</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition.name,
    displayMode: state.competition.displayMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    competitionActions: bindActionCreators(competitionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
