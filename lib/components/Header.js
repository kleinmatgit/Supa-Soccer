import React, { Component } from 'react';
import * as comp from 'constants/competitions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';

class Header extends Component {

  onLigue1Click = () => {
    if(this.props.competition !== comp.LIGUE1) {
      this.props.competitionActions.loadCompetition(comp.LIGUE1);
    }
  }

  onLaLigaClick = () => {
    if(this.props.competition !== comp.LALIGA) {
      this.props.competitionActions.loadCompetition(comp.LALIGA);
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    competitionActions: bindActionCreators(competitionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
