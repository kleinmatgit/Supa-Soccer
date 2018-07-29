import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StageList from 'components/StageList';
import MatchList from 'components/MatchList';
import LoadingDots from 'components/LoadingDots';

class MatchArea extends Component {

  render() {
    return (
      <div>
          <StageList />
          <hr />
          {this.props.matchesLoading
            ? <LoadingDots dots={5} />
            : <MatchList matches={this.props.matches} />
          }
      </div>
    );
  }
}

MatchArea.propTypes = {
  matches: PropTypes.array.isRequired,
  matchesLoading: PropTypes.bool.isRequired,
};

export default MatchArea;
