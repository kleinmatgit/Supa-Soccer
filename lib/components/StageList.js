import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionActions from 'actions/competitionActions';

import {FormGroup, FormControl} from 'react-bootstrap';

class StageList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.optionList = [];

    for (var i = this.props.numberOfMatchday; i > 0; i--) {
      this.optionList.push(
            <option key={i - 1} value={i}>MatchDay {i} of {this.props.numberOfMatchday}</option>
        );
    }
  }

  onChange = (event) => {
    this.props.competitionActions.updateMatchday(Number(event.target.value));
    this.props.competitionActions.loadMatches();
  }

  render() {
    return (
      <div className="match-stage-list">
        <FormGroup controlId="formControlsSelect">
          <FormControl componentClass="select" onChange={this.onChange}>
            {this.optionList}
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

StageList.propTypes = {
  matchday: PropTypes.number.isRequired,
  competitionActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    numberOfMatchday: state.competition.numberOfMatchday,
    matchday: state.competition.matchday,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    competitionActions: bindActionCreators(competitionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StageList);
