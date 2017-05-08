const storeSearchQuery = (state = '', action) => {
  if (action && action.type === 'STORE_SEARCH_QUERY') {
    return action.storeSearchQuery;
  }
  return state
}

export default storeSearchQuery;