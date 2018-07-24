import React, { Component } from 'react';
import TeamListRow from 'components/TeamListRow';

class TeamList extends Component {

  render() {
    return (
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                  </tr>
              </thead>
              <tbody>
                  {this.props.teams.map(team =>
                      <TeamListRow key={team.id} team={team} />
                  )}
              </tbody>
          </table>
    );
  }

}

export default TeamList;
