import React from 'react';

function Search(props) {
  return (
    <form className="centered search-form" onSubmit={(e) => {
      e.preventDefault();
      return props.fetchSearchQuery();
    }}>
      <div>
       <input
          type='text'
          value={props.searchQuery}
          onChange={(e) => props.updateSearchQuery(e.target.value)}
       />
      </div>
      <div>
        <button type="submit" className="search-button">Search</button>
      </div>
    </form>
  );
}

export default Search;