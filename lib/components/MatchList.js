import React from 'react';
import PropTypes from 'prop-types';
import MatchListRow from './MatchListRow';

const MatchList = ({ matches }) => {

  return (
      <div className="match-list">
        <table>
            <thead>
                <tr>
                    <th>HomeTeam</th>
                    <th>AwayTeam</th>
                    <th>HomeScore</th>
                    <th>AwayScore</th>
                </tr>
            </thead>
            <tbody>
                {matches.map(match =>
                    <MatchListRow key={match.id} match={match} />
                )}
            </tbody>
        </table>
      </div>
  );
};

MatchList.propTypes = {
  matches: PropTypes.array.isRequired
};

export default MatchList;
