export const searchHasErrored = (bool) => {
  return {
    type: 'SEARCH_HAS_ERRORED',
    searchHasErrored: bool
  }
}

export const searchIsLoading = (bool) => {
  return {
    type: 'SEARCH_IS_LOADING',
    searchIsLoading: bool
  }
}

export const searchFetchDataSuccess = (searchResponse) => {
  return {
    type: 'SEARCH_FETCH_DATA_SUCCESS',
    searchResponse
  }
}