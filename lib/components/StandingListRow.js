import React from 'react';
import PropTypes from 'prop-types';

class StandingListRow extends React.Component {

  render() {
    return (
      <tr className="standings-row">
        <td>{this.props.standing.position}</td>
        <td>{this.props.standing.team.name}</td>
        <td>{this.props.standing.playedGames}</td>
        <td>{this.props.standing.won}</td>
        <td>{this.props.standing.draw}</td>
        <td>{this.props.standing.lost}</td>
        <td>{this.props.standing.goalsFor}</td>
        <td>{this.props.standing.goalsAgainst}</td>
        <td>{this.props.standing.goalDifference}</td>
        <td>{this.props.standing.points}</td>
      </tr>
    );
  }
}

StandingListRow.propTypes = {
  standing: PropTypes.object.isRequired
};

export default StandingListRow;
