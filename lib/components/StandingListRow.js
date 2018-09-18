import React from 'react';
import PropTypes from 'prop-types';
import TeamName from 'helpers/TeamName';
import TeamImage from 'components/TeamImage';

class StandingListRow extends React.Component {

  render() {

    let teamName = TeamName.getDisplayName(this.props.standing.team.name);

    return (
      <tr id="standings-row">
        <td className="standings-row-position">{this.props.standing.position}</td>
        <td id="standings-row-img"><TeamImage team={this.props.standing.team.name} /></td>
        <td className="standings-row-team">{teamName}</td>
        <td>{this.props.standing.playedGames}</td>
        <td>{this.props.standing.won}</td>
        <td>{this.props.standing.draw}</td>
        <td>{this.props.standing.lost}</td>
        <td id="standings-table-toggle">{this.props.standing.goalsFor}</td>
        <td id="standings-table-toggle">{this.props.standing.goalsAgainst}</td>
        <td id="standings-table-toggle">{this.props.standing.goalDifference}</td>
        <td>{this.props.standing.points}</td>
      </tr>
    );
  }
}

StandingListRow.propTypes = {
  standing: PropTypes.object.isRequired
};

export default StandingListRow;
