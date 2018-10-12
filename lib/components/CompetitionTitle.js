import React from 'react';
import ImageHelper from 'helpers/ImageHelper';

class CompetitionTitle extends React.Component {

  render() {
    return (
      <div id="competition-title-area">
        <img src={'/images/' + ImageHelper.getName(this.props.competition)} />
        <h1>{this.props.competition}</h1>
      </div>
    );
  }
}

export default CompetitionTitle;
