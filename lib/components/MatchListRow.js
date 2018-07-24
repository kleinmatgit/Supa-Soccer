import React from 'react';
import PropTypes from 'prop-types';

const MatchListRow = ({match}) => {
  return (
        <tr>
            <td>{match.homeTeam.name}</td>
            <td>{match.awayTeam.name}</td>
            <td>{match.score.fullTime.homeTeam}</td>
            <td>{match.score.fullTime.awayTeam}</td>
        </tr>
  );
};

MatchListRow.propTypes = {
  match: PropTypes.object.isRequired
};

export default MatchListRow;
