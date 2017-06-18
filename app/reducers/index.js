import {combineReducers} from 'redux';

import searchHasErrored from './searchHasErrored';
import searchIsLoading from './searchIsLoading';
import searchFetchDataSuccess from './searchFetchDataSuccess';
import searchQuery from './searchQuery';
import searchQueryIsValid from './searchQueryIsValid';

const searchApp = combineReducers({
  searchHasErrored,
  searchIsLoading,
  searchFetchDataSuccess,
  searchQuery,
  searchQueryIsValid
});
export default searchApp;