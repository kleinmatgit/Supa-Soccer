import React from 'react';
import CompetitionArea from 'components/CompetitionArea';
import Header from 'components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br/>
        <CompetitionArea />
      </div>
    );
  }
}

export default App;
