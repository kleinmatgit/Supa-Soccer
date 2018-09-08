import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'react-bootstrap';

class CompetitionButtons extends React.Component {

  render() {
    return (
      <div className="competition-buttons">
        <Button className="competition-buttons-single-btn" onClick={this.props.onClickMatches}>Matches</Button>
        <Button className="competition-buttons-single-btn competition-buttons-btn-center" onClick={this.props.onClickStandings}>Standings</Button>
        <Button className="competition-buttons-single-btn" onClick={this.props.onClickTeams}>Teams</Button>
      </div>
    );
  }
}

CompetitionButtons.propTypes = {
  onClickMatches: PropTypes.func.isRequired,
  onClickStandings: PropTypes.func.isRequired,
  onClickTeams: PropTypes.func.isRequired,
};

export default CompetitionButtons;
