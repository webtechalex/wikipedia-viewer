const searchFetchDataSuccess = (state = {}, action) => {
  if (action && action.type === 'SEARCH_FETCH_DATA_SUCCESS') {
    return action.searchFetchDataSuccess;
  }
  return state
}

export default searchFetchDataSuccess;
