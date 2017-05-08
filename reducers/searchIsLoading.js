const searchIsLoading = (state = false, action) => {
  if (action && action.type === 'SEARCH_IS_LOADING') {
    return action.searchIsLoading;
  }
  return state
}

export default searchIsLoading;
