import React from 'react';

import Loading from './Loading';
import Error from './Error';
import ResultList from './ResultList';

function ResultsContainer(props) {
  // TODO: Set up conditional rendering of child components
  return (
    <div>
      <Loading />
      <Error />
      {/*<ResultList />*/}
    </div>
  );
}

export default ResultsContainer;