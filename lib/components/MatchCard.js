import React from 'react';
import PropTypes from 'prop-types';
import TeamName from 'helpers/TeamName';
import TeamImage from 'components/TeamImage';

import {Row, Col} from 'react-bootstrap';

function displayScore(score) {
  return score === null ? '-' : score;
}

function displayStatus(status) {
  let statusMap = {
    'FINISHED': 'FT',
    'PAUSE': 'HT',
    'SCHEDULED': '',
  };
  if(status in statusMap) {
    return statusMap[status];
  }
  return status;
}

class MatchCard extends React.Component {

  isWinner = (homeOrAway) => {
    let homeScore = this.props.match.score.fullTime.homeTeam;
    let awayScore = this.props.match.score.fullTime.awayTeam;
    return ((homeOrAway === 'home' && homeScore > awayScore)
      || (homeOrAway === 'away' && homeScore < awayScore) );
  }

  getClassNameScore = (homeOrAway) => {
    let cls = 'match-card-scores';
    if(this.isWinner(homeOrAway)) {
      cls += ' score-winner';
    }
    return cls;
  }

  getClassNameTeam = (homeOrAway) => {
    let cls = 'match-card-teams';
    if(this.isWinner(homeOrAway)) {
      cls += ' team-winner';
    }
    return cls;
  }

  formatDate = () => {
    var weekday = new Array(7);
    weekday[0] =  'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    var d = new Date(this.props.match.utcDate),
      day = weekday[d.getDay()].substring(0,3),
      date = d.getDate(),
      month = d.getMonth();
    return (day + ', ' + date + '/' + month);
  }

  createTeamRow = (teamName, teamScore, homeOrAway) => {
    return (
      <Row>
        <Col>
          <Row>
            <Col xs={2}><TeamImage team={teamName} /></Col>
            <Col xs={8} className={this.getClassNameTeam(homeOrAway)}>{TeamName.getDisplayName(teamName)}</Col>
            <Col xs={2} className={this.getClassNameScore(homeOrAway)}>{displayScore(teamScore)}</Col>
          </Row>
        </Col>
      </Row>
    );
  }

  render() {
    return(
      <Col sm={6} className="match-card">
        <Row>
          <Col xs={9}>
            {this.createTeamRow(this.props.match.homeTeam.name, this.props.match.score.fullTime.homeTeam, 'home')}
            {this.createTeamRow(this.props.match.awayTeam.name, this.props.match.score.fullTime.awayTeam, 'away')}
          </Col>
          <Col xs={3} className="vertical-line">
            <Row>{displayStatus(this.props.match.status)}</Row>
            <Row>{this.formatDate()}</Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

MatchCard.propTypes = {
  match: PropTypes.object.isRequired
};

export default MatchCard;
