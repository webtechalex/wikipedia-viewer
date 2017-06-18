import React from 'react';

function ResultList(props) {
  // TODO: These prop names will most likely change once data is received and processed
  return (
    <ul>
      {props.results.map(result => (
        <li>
          <h2>{result.title}</h2>
          <h3>{result.synopsis}</h3>
          <a href={result.link}>more...</a>
        </li>
      ))}
    </ul>
  )
}

export default ResultList;