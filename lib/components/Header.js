import React from 'react';
import {PropTypes} from 'prop-types';
import * as comp from 'constants/competitions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';
import HeaderCompetitionItem from 'components/HeaderCompetitionItem';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends React.Component {

  onLigue1Click = () => { this.onCompetitionClick(comp.LIGUE1); }
  onLaLigaClick = () => { this.onCompetitionClick(comp.LALIGA); }
  onSerieAClick = () => { this.onCompetitionClick(comp.SERIEA); }
  onPremierLeagueClick = () => { this.onCompetitionClick(comp.PREMIER_LEAGUE); }
  onBundesligaClick = () => { this.onCompetitionClick(comp.BUNDESLIGA); }

  onCompetitionClick = (competition) => {
    if(this.props.competition !== competition) {
      this.props.competitionActions.loadCompetition(competition);
    }
  }

  renderOld() {
    return (
    <div>
      <Navbar inverse={true} id="header-navbar">

        <Nav>
            <NavItem eventKey={1} onClick={this.onLigue1Click}>
              <HeaderCompetitionItem competition={comp.LIGUE1}/>
            </NavItem>
            <NavItem eventKey={2} onClick={this.onLaLigaClick}>
              <HeaderCompetitionItem competition={comp.LALIGA}/>
            </NavItem>
            <NavItem eventKey={3} onClick={this.onSerieAClick}>
              <HeaderCompetitionItem competition={comp.SERIEA}/>
            </NavItem>
            <NavItem eventKey={4} onClick={this.onPremierLeagueClick}>
              <HeaderCompetitionItem competition={comp.PREMIER_LEAGUE}/>
            </NavItem>
            <NavItem eventKey={5} onClick={this.onBundesligaClick}>
              <HeaderCompetitionItem competition={comp.BUNDESLIGA}/>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    );
  }

  render() {
    return (
      <div className="custom-navbar">
        <ul>
          <li><HeaderCompetitionItem competition={comp.LIGUE1} onClick={this.onLigue1Click}/></li>
          <li><HeaderCompetitionItem competition={comp.LALIGA} onClick={this.onLaLigaClick}/></li>
          <li><HeaderCompetitionItem competition={comp.SERIEA} onClick={this.onSerieAClick}/></li>
          <li><HeaderCompetitionItem competition={comp.PREMIER_LEAGUE} onClick={this.onPremierLeagueClick}/></li>
          <li><HeaderCompetitionItem competition={comp.BUNDESLIGA} onClick={this.onBundesligaClick}/></li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  competition: PropTypes.string.isRequired,
  displayMode: PropTypes.number.isRequired,
  competitionActions: PropTypes.object.isRequired,
};

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
