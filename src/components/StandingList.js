import React from 'react';
import PropTypes from 'prop-types';
import StandingListRow from './StandingListRow';

const StandingList = ({standings}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody>
                {standings.map(standing =>
                    <StandingListRow key={standing.position} standing={standing} />
                )}
            </tbody>
        </table>
    );
};

StandingList.propTypes = {
    standings: PropTypes.array.isRequired
};

export default StandingList;