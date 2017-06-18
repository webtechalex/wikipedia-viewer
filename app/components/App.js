import React from 'react';

import Title from './Title';
import Search from './Search';
import ResultsContainer from './ResultsContainer';

function App(props) {
  return (
    <div>
      <Title />
      <Search />
      <ResultsContainer />
    </div>
  );
}

export default App;