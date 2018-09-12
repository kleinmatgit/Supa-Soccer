import React from 'react';

class CompetitionTitle extends React.Component {

  render() {
    return (
      <div className="competition-title-area">
        <div className="competition-title-logo">
          <img src={'/images/' + this.props.competition.toLowerCase().replace(' ','') + '.png'} />
        </div>
        <div className="competition-title-text">
          <h1>{this.props.competition}</h1>
        </div>
      </div>
    );
  }
}

export default CompetitionTitle;
