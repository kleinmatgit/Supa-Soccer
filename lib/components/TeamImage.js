import React from 'react';
import PropTypes from 'prop-types';
import TeamName from 'helpers/TeamName';

class TeamImage extends React.Component {

  render() {

    let teamCrestSrc = TeamName.getCrestSrc(this.props.team);

    return (
      <img className="team-img" src={teamCrestSrc}/>
    );
  }
}

TeamImage.propTypes = {
  team: PropTypes.string.isRequired,
};

export default TeamImage;
