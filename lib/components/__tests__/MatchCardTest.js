import React from 'React';
import MatchCard from 'components/MatchCard';
import renderer from 'react-test-renderer';

describe('MatchCard component', () => {

  const testProps = {
    match: {
      'id': 233039,
      'utcDate': '2018-08-18T11:30:00Z',
      'status': 'FINISHED',
      'matchday': 2,
      'homeTeam': {
        'id': 715,
        'name': 'Cardiff City FC'
      },
      'awayTeam': {
        'id': 67,
        'name': 'Newcastle United FC'
      },
      'score': {
        'winner': 'DRAW',
        'duration': 'REGULAR',
        'fullTime': {
          'homeTeam': 0,
          'awayTeam': 0
        },
        'halfTime': {
          'homeTeam': 0,
          'awayTeam': 0
        },
        'extraTime': {
          'homeTeam': null,
          'awayTeam': null
        },
        'penalties': {
          'homeTeam': null,
          'awayTeam': null
        }
      }
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <MatchCard {...testProps}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
