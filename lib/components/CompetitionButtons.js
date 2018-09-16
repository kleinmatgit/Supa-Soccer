import React from 'react';
import PropTypes from 'prop-types';

import {Button, ButtonGroup} from 'react-bootstrap';

class CompetitionButtons extends React.Component {

  render() {
    return (
      <div className="competition-buttons">
      <ButtonGroup>
        <Button className="competition-buttons-single-btn" onClick={this.props.onClickMatches}>Matches</Button>
        <Button className="competition-buttons-single-btn" onClick={this.props.onClickStandings}>Standings</Button>
      </ButtonGroup>
      </div>
    );
  }
}

CompetitionButtons.propTypes = {
  onClickMatches: PropTypes.func.isRequired,
  onClickStandings: PropTypes.func.isRequired,
};

export default CompetitionButtons;
