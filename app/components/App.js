import React from 'react';

import Title from './Title';
import SearchContainer from './SearchContainer';
import ResultsContainer from './ResultsContainer';

import '../styles/index.scss';

function App() {
  return (
    <div>
      <Title />
      <SearchContainer />
      <ResultsContainer />
    </div>
  );
}

export default App;