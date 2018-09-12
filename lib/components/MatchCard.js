import React from 'react';
import PropTypes from 'prop-types';
import TeamName from 'helpers/TeamName';
import TeamImage from 'components/TeamImage';

function displayScore(score) {
  return score === null ? '-' : score;
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

  // formatTime = (dateString) => {
  //   var d = new Date(dateString), day =
  //   return (day + ', ' + date + '/' + month);
  // }

  render() {

    let homeTeam = TeamName.getDisplayName(this.props.match.homeTeam.name);
    let awayTeam = TeamName.getDisplayName(this.props.match.awayTeam.name);

    return (
      <div className="match-card">
        <table>
          <tbody>
            <tr>
              <td>
                <table className="match-card-table">
                  <tbody>
                    <tr>
                      <td className="match-card-crest"><TeamImage team={this.props.match.homeTeam.name} /></td>
                      <td className={this.getClassNameTeam('home')}>{homeTeam}</td>
                      <td className={this.getClassNameScore('home')}>{displayScore(this.props.match.score.fullTime.homeTeam)}</td>
                    </tr>
                    <tr>
                      <td className="match-card-crest"><TeamImage team={this.props.match.awayTeam.name} /></td>
                      <td className={this.getClassNameTeam('away')}>{awayTeam}</td>
                      <td className={this.getClassNameScore('away')}>{displayScore(this.props.match.score.fullTime.awayTeam)}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <div className="match-card-details">
                  <div className="match-card-details-status">{this.props.match.status}</div>
                  <div className="match-card-details-date">{this.formatDate()}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

MatchCard.propTypes = {
  match: PropTypes.object.isRequired
};

export default MatchCard;
