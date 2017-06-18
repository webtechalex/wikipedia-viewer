const searchHasErrored = (state = false, action) => {
  if (action && action.type === 'SEARCH_HAS_ERRORED') {
    return action.searchHasErrored;
  }
  return state
}

export default searchHasErrored;
