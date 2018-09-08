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
      cards.push(this.createTwoCards(i));
    }

    return cards;
  }

  createTwoCards = (id1) => {
    var match1 = this.props.matches[id1];
    var match2 = this.props.matches[id1+1];
    return (
      <Row className="show-grid" key={id1}>
        <Col xs={12} md={6}>
          <MatchCard key={match1.id} match={match1} />
        </Col>
        <Col xs={12} md={6}>
          <MatchCard key={match2.id} match={match2} />
        </Col>
      </Row>
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
