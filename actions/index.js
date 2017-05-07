export const submitSearch = (query) => {
  return {
    type: 'SUBMIT_SEARCH',
    query,
    isLoading: true
  };
}
