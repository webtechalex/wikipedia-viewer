export const searchHasErrored = (bool) => {
  return {
    type: 'SEARCH_HAS_ERRORED',
    searchHasErrored: bool
  };
}

export const searchIsLoading = (bool) => {
  return {
    type: 'SEARCH_IS_LOADING',
    searchIsLoading: bool
  };
}

export const searchFetchDataSuccess = (searchResponse) => {
  return {
    type: 'SEARCH_FETCH_DATA_SUCCESS',
    searchResponse
  };
}

export const searchQuery = (searchQuery) => {
  return {
    type: 'SEARCH_QUERY',
    searchQuery
  };
}

export const searchQueryIsValid = (bool) => {
  return {
    type: 'SEARCH_QUERY_IS_VALID',
    searchQueryIsValid: bool
  };
}

export const fetchSearchQuery = (query) => {
  return dispatch => {
    dispatch(searchIsLoading(true));
    return fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&prop=info&inprop=url&format=json&callback=?`)
      .then(response => response.json())
      .then(json => dispatch(searchFetchDataSuccess(json)))
      .catch(err => dispatch(searchHasErrored(true)));
  }
}
