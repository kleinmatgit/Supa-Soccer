import React from 'react';
import PropTypes from 'prop-types';

const MatchListRow = ({match}) => {
    return (
        <tr>
            <td>{match.homeTeamName}</td>
            <td>{match.awayTeamName}</td>
            <td>{match.result.goalsHomeTeam}</td>
            <td>{match.result.goalsAwayTeam}</td>
        </tr>
    );
};

MatchListRow.propTypes = {
    match: PropTypes.object.isRequired
};

export default MatchListRow;