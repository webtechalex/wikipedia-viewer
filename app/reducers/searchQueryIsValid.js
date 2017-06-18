const searchQueryIsValid = (state = true, action) => {
  if (action && action.type === 'SEARCH_QUERY_IS_VALID') {
    return action.searchQueryIsValid;
  }
  return state
}

export default searchQueryIsValid;