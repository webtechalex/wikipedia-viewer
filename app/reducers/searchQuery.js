const searchQuery = (state = '', action) => {
  if (action && action.type === 'STORE_SEARCH_QUERY') {
    return action.searchQuery;
  }
  return state
}

export default searchQuery;