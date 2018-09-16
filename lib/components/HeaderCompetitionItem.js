import React from 'react';
import {PropTypes} from 'prop-types';

class HeaderCompetitionItem extends React.Component {

  render() {
    return (
      <img src={'/images/' + this.props.competition.toLowerCase().replace(' ','') + '.png'} />
    );
  }

}

HeaderCompetitionItem.propTypes = {
  competition: PropTypes.string.isRequired,
};

export default HeaderCompetitionItem;
