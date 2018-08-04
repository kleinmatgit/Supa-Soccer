import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CompetitionPage from 'components/CompetitionPage';
import LoadingDots from 'components/LoadingDots';

class CompetitionArea extends Component {

  render() {
    return (
      <div>
          {this.props.competitionLoading
            ? <LoadingDots dots={5} />
            : <CompetitionPage />
          }
      </div>
    );
  }
}

CompetitionArea.propTypes = {
  competitionLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    competitionLoading: state.competition.competitionLoading,
  };
}

export default connect(mapStateToProps)(CompetitionArea);
