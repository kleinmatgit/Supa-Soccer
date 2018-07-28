import React from 'react';
import PropTypes from 'prop-types';

const StandingListRow = ({standing}) => {
  return (
        <tr>
            <td>{standing.position}</td>
            <td>{standing.team.name}</td>
            <td>{standing.playedGames}</td>
            <td>{standing.won}</td>
            <td>{standing.draw}</td>
            <td>{standing.lost}</td>
            <td>{standing.goalsFor}</td>
            <td>{standing.goalsAgainst}</td>
            <td>{standing.goalDifference}</td>
            <td>{standing.points}</td>
        </tr>
  );
};

StandingListRow.propTypes = {
  standing: PropTypes.object.isRequired
};

export default StandingListRow;
