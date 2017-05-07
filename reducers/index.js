const submitSearch = (state, action) => {
  if (action.type === 'SUBMIT_SEARCH') {
    return Object.assign(
      {},
      state,
      {
        query: action.query,
        isLoading: action.isLoading
      }
    );
  }
}

export default submitSearch;