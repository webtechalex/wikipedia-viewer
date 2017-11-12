import axios from 'axios';
export const SEARCH_HAS_ERRORED = 'SEARCH_HAS_ERRORED';
export const SEARCH_IS_LOADING = 'SEARCH_IS_LOADING';
export const SEARCH_FETCH_DATA_SUCCESS = 'SEARCH_FETCH_DATA_SUCCESS';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const SEARCH_QUERY_IS_VALID = 'SEARCH_QUERY_IS_VALID';

export const searchHasErrored = (bool) => {
  return {
    type: SEARCH_HAS_ERRORED,
    searchHasErrored: bool
  };
}

export const searchIsLoading = (bool) => {
  return {
    type: SEARCH_IS_LOADING,
    searchIsLoading: bool
  };
}

export const searchFetchDataSuccess = (searchResponseData) => {
  return {
    type: SEARCH_FETCH_DATA_SUCCESS,
    searchResponseData
  };
}

export const updateSearchQuery = (searchQuery) => {
  return {
    type: UPDATE_SEARCH_QUERY,
    searchQuery
  };
}

export const searchQueryIsValid = (bool) => {
  return {
    type: SEARCH_QUERY_IS_VALID,
    searchQueryIsValid: bool
  };
}

export const clearSearchResults = () => {
  return function(dispatch) {
    dispatch(searchFetchDataSuccess(null));
    dispatch(searchQueryIsValid(true));
    dispatch(searchHasErrored(false));
  }
}

export const fetchSearchQuery = () => {
  return function(dispatch, getState) {
    // Reset search response object and feedback UI each time a search is executed
    dispatch(clearSearchResults());

    // Check that a search query exists, invalidate if not
    if (getState().searchQuery === '') {
      dispatch(searchQueryIsValid(false));
    } else {
      // Otherwise set loading state and begin search request
      dispatch(searchIsLoading(true));

      const requestURL = `https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&exintro&explaintext&gsrsearch=${getState().searchQuery}`;
      // Reset input field after request is built
      dispatch(updateSearchQuery(''));

      axios.get(requestURL).then(function(response) {
        dispatch(searchIsLoading(false));
        dispatch(searchFetchDataSuccess(response));
      }).catch(function() {
        dispatch(searchIsLoading(false));
        dispatch(searchHasErrored(true));
      });

    }
  };
}
