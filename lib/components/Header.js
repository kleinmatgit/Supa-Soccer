import React from 'react';
import {PropTypes} from 'prop-types';
import * as comp from 'constants/competitions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';
import HeaderCompetitionItem from 'components/HeaderCompetitionItem';

class Header extends React.Component {

  onLigue1Click = () => { this.onCompetitionClick(comp.LIGUE1); }
  onLaLigaClick = () => { this.onCompetitionClick(comp.LALIGA); }
  onSerieAClick = () => { this.onCompetitionClick(comp.SERIEA); }
  onPremierLeagueClick = () => { this.onCompetitionClick(comp.PREMIER_LEAGUE); }
  onBundesligaClick = () => { this.onCompetitionClick(comp.BUNDESLIGA); }
  onChampionsLeagueClick = () => { this.onCompetitionClick(comp.CHAMPIONS_LEAGUE); }

  onCompetitionClick = (competition) => {
    if(this.props.competition !== competition) {
      this.props.competitionActions.loadCompetition(competition);
    }
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
          <li><HeaderCompetitionItem competition={comp.CHAMPIONS_LEAGUE} onClick={this.onChampionsLeagueClick}/></li>
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
