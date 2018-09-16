import React from 'react';
import PropTypes from 'prop-types';
import MatchCard from 'components/MatchCard';

import {Grid, Row, Col} from 'react-bootstrap';

class MatchData extends React.Component {

  createCards = () => {

    if(this.props.matches === undefined) {
      return;
    }

    let cards = [];

    for(let i = 0; i <this.props.matches.length; i = i + 2) {

      if(i+1 < this.props.matches.length){
        cards.push(
          <Row className="show-grid" key={i}>
            {this.createCard(i)}
            {this.createCard(i+1)}
          </Row>
        );
      } else {
        cards.push(
          <Row className="show-grid" key={i}>
            {this.createCard(i)}
          </Row>
        );
      }
    }
    return cards;
  }

  createCard = (id) => {
    var match = this.props.matches[id];
    return (
      <Col xs={12} md={6}>
        <MatchCard key={match.id} match={match} />
      </Col>
    );
  }

  render() {
    return (
      <Grid className="match-data">
        {this.createCards()}
      </Grid>
    );
  }
}

MatchData.propTypes = {
  matches: PropTypes.array.isRequired
};

export default MatchData;
