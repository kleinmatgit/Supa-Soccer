import React from 'react';
import PropTypes from 'prop-types';
import StandingListRow from './StandingListRow';

class StandingList extends React.Component {

  createStandingsList = () => {

    if(this.props.standings === undefined || this.props.standings.length === 0) {
      return;
    }

    return (
      this.props.standings.map(standing =>
        <StandingListRow key={standing.position} standing={standing} />
      )
    );
  }

  render() {
    return (
      <div className="standings-data">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Club</th>
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
            {this.createStandingsList()}
          </tbody>
        </table>
      </div>
    );
  }
}

StandingList.propTypes = {
  standings: PropTypes.array.isRequired
};

export default StandingList;
