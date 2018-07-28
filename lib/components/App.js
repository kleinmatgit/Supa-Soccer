import React from 'react';
import CompetitionPage from 'components/CompetitionPage';
import Header from 'components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br/>
        <CompetitionPage />
      </div>
    );
  }
}

export default App;
