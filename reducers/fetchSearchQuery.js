const fetchSearchQuery = (query) => {
  return dispatch => {
    dispatch(searchIsLoading(true));
    return fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&prop=info&inprop=url&format=json&callback=?`)
      .then(response => response.json())
      .then(json => dispatch(searchFetchDataSuccess(json)));
  }
}

export default fetchSearchQuery;