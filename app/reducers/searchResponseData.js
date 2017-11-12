import { SEARCH_FETCH_DATA_SUCCESS } from '../actions';

const searchResponseData = (state = null, action) => {
  if (action && action.type === SEARCH_FETCH_DATA_SUCCESS) {
    return action.searchResponseData;
  }
  return state
};

export default searchResponseData;
