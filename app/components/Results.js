import React from 'react';

import Loading from './Loading';
import Error from './Error';
import Validation from './Validation';
import ResultList from './ResultList';

function Results(props) {
  function resultsAsArray() {
    let {pages} = props.searchResponseData.data.query;
    return Object.keys(pages).map(page => pages[page]);
  }

  return (
    <div className="results-container">
      {props.searchIsLoading && <Loading />}
      {props.searchHasErrored && <Error />}
      {!props.searchQueryIsValid && <Validation />}
      {props.searchResponseData && <ResultList clearSearchResults={props.clearSearchResults} results={resultsAsArray()} />}
    </div>
  );
}

export default Results;