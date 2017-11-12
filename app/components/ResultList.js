import React from 'react';


function ResultList(props) {
  return (
    <div>
      <div className="clear">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          return props.clearSearchResults();
        }}>clear search results</a>
      </div>
      <ul>
        {props.results.map(result => {
          return (
            <li key={result.pageid} className="search-result">
              <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank">
                <h2>{result.title}</h2>
                <p>{result.extract.slice(0, 200)}...</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default ResultList;
