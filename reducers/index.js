import {combineReducers} from 'redux';

import searchHasErrored from './searchHasErrored';
import searchIsLoading from './searchIsLoading';
import searchFetchDataSuccess from './searchFetchDataSuccess';

const searchApp = combineReducers({
  searchHasErrored,
  searchIsLoading,
  searchFetchDataSuccess
});

export default searchApp;