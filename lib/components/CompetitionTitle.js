import React from 'react';

class CompetitionTitle extends React.Component {

  render() {
    return (
      <div id="competition-title-area">
        <img src={'/images/' + this.props.competition.toLowerCase().replace(' ','') + '.png'} />
        <h1>{this.props.competition}</h1>
      </div>
    );
  }
}

export default CompetitionTitle;
