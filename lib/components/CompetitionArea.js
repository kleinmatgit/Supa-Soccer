import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CompetitionPage from 'components/CompetitionPage';
import LoadingDots from 'components/LoadingDots';

// import {Grid} from 'react-bootstrap';

class CompetitionArea extends React.Component {

  render() {
    return (
      <div className="competition-area">
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
