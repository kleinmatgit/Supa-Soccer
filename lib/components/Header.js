import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import * as comp from 'constants/competitions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';
import DisplayMode from 'constants/displayMode';

import {Navbar, Nav, NavItem, ButtonToolbar, Button} from 'react-bootstrap';

class Header extends Component {

  onLigue1Click = () => { this.onCompetitionClick(comp.LIGUE1); }
  onLaLigaClick = () => { this.onCompetitionClick(comp.LALIGA); }
  onSerieAClick = () => { this.onCompetitionClick(comp.SERIEA); }

  onCompetitionClick = (competition) => {
    if(this.props.competition !== competition) {
      this.props.competitionActions.loadCompetition(competition);
    }
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
      <Navbar inverse={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">SupaSoccer</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onClick={this.onLigue1Click}>{comp.LIGUE1}</NavItem>
            <NavItem eventKey={2} onClick={this.onLaLigaClick}>{comp.LALIGA}</NavItem>
            <NavItem eventKey={3} onClick={this.onSerieAClick}>{comp.SERIEA}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ButtonToolbar>
        <Button onClick={this.onClickMatches}>Matches</Button>
        <Button onClick={this.onClickStandings}>Standings</Button>
        <Button onClick={this.onClickTeams}>Teams</Button>
      </ButtonToolbar>
    </div>
    );
  }
}

Header.propTypes = {
  competition: PropTypes.string.isRequired,
  displayMode: PropTypes.number.isRequired,
  matchesLoaded: PropTypes.bool.isRequired,
  standingsLoaded: PropTypes.bool.isRequired,
  teamsLoaded: PropTypes.bool.isRequired,
  competitionActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    competition: state.competition.name,
    displayMode: state.competition.displayMode,
    matchesLoaded: state.competition.matchesLoaded,
    standingsLoaded: state.competition.standingsLoaded,
    teamsLoaded: state.competition.teamsLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    competitionActions: bindActionCreators(competitionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
