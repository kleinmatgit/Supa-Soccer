import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import StandingList from 'components/StandingList';

class StandingHandler extends Component {

  render() {
    return (
      <div>
        {this.props.standings.map(standing =>
            <StandingList key={standing.group} group={standing.group} standings={standing.table} />
        )}
      </div>
    );
  }

}

StandingHandler.propTypes = {
  standings: PropTypes.array.isRequired,
};

export default StandingHandler;
