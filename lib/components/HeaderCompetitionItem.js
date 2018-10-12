import React from 'react';
import {PropTypes} from 'prop-types';
import ImageHelper from 'helpers/ImageHelper';

class HeaderCompetitionItem extends React.Component {

  render() {
    return (
      <img src={'/images/' + ImageHelper.getName(this.props.competition)}
        onClick={this.props.onClick} />
    );
  }

}

HeaderCompetitionItem.propTypes = {
  competition: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeaderCompetitionItem;
