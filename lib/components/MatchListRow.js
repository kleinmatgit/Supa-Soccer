import React from 'react';
import PropTypes from 'prop-types';

function displayScore(score) {
  return score ? score : '-';
}

const MatchListRow = ({match}) => {
  return (
        <tr>
            <td>{match.homeTeam.name}</td>
            <td>{match.awayTeam.name}</td>
            <td>{displayScore(match.score.fullTime.homeTeam)}</td>
            <td>{displayScore(match.score.fullTime.awayTeam)}</td>
        </tr>
  );
};

MatchListRow.propTypes = {
  match: PropTypes.object.isRequired
};

export default MatchListRow;
