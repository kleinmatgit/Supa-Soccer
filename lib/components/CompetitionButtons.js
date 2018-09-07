import React from 'react';
import PropTypes from 'prop-types';

import {ButtonToolbar, Button} from 'react-bootstrap';

class CompetitionButtons extends React.Component {

  render() {
    return (
      <ButtonToolbar>
        <Button onClick={this.props.onClickMatches}>Matches</Button>
        <Button onClick={this.props.onClickStandings}>Standings</Button>
        <Button onClick={this.props.onClickTeams}>Teams</Button>
      </ButtonToolbar>
    );
  }
}

CompetitionButtons.propTypes = {
  onClickMatches: PropTypes.func.isRequired,
  onClickStandings: PropTypes.func.isRequired,
  onClickTeams: PropTypes.func.isRequired,
};

export default CompetitionButtons;
