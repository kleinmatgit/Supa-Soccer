import React from 'react';
import PropTypes from 'prop-types';
import TeamName from 'helpers/TeamName';
import TeamImage from 'components/TeamImage';

function displayScore(score) {
  return score === null ? '-' : score;
}

class MatchCard extends React.Component {

  render() {

    let homeTeam = TeamName.getDisplayName(this.props.match.homeTeam.name);
    let awayTeam = TeamName.getDisplayName(this.props.match.awayTeam.name);

    return (
      <div className="match-card">
        <table>
          <tbody>
            <tr>
              <td className="match-card-crest"><TeamImage team={this.props.match.homeTeam.name} /></td>
              <td className="match-card-teams">{homeTeam}</td>
              <td className="match-card-scores">{displayScore(this.props.match.score.fullTime.homeTeam)}</td>
            </tr>
            <tr>
              <td className="match-card-crest"><TeamImage team={this.props.match.awayTeam.name} /></td>
              <td className="match-card-teams">{awayTeam}</td>
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
