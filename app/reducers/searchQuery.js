import { UPDATE_SEARCH_QUERY } from '../actions'

const searchQuery = (state = '', action) => {
  if (action && action.type === UPDATE_SEARCH_QUERY) {
    return action.searchQuery;
  }
  return state
}

export default searchQuery;