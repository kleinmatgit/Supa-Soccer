import React from 'react';
import PropTypes from 'prop-types';

const StandingListRow = ({standing}) => {
    return (
        <tr>
            <td>{standing.position}</td>
            <td>{standing.teamName}</td>
            <td>{standing.playedGames}</td>
            <td>{standing.wins}</td>
            <td>{standing.draws}</td>
            <td>{standing.losses}</td>
            <td>{standing.goals}</td>
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