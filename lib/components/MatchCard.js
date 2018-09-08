import React from 'react';
import PropTypes from 'prop-types';

// import {Grid, Row, Col} from 'react-bootstrap';

function displayScore(score) {
  return score === null ? '-' : score;
}

class MatchCard extends React.Component {
  render() {
    return (
      <div className="match-card">
        <table>
          <tbody>
            <tr>
              <td className="match-card-teams">{this.props.match.homeTeam.name}</td>
              <td className="match-card-scores">{displayScore(this.props.match.score.fullTime.homeTeam)}</td>
            </tr>
            <tr>
              <td className="match-card-teams">{this.props.match.awayTeam.name}</td>
              <td className="match-card-scores">{displayScore(this.props.match.score.fullTime.awayTeam)}</td>
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
