import React, { Component } from 'react';

class TeamListRow extends Component {

  render() {
    const team = this.props.team;
    return (
          <tr>
              <td>{team.shortName}</td>
          </tr>
    );
  }

}

export default TeamListRow;
