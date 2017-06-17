import {combineReducers} from 'redux';

import searchHasErrored from './searchHasErrored';
import searchIsLoading from './searchIsLoading';
import searchFetchDataSuccess from './searchFetchDataSuccess';
import storeSearchQuery from './storeSearchQuery';
import searchQueryIsValid from './searchQueryIsValid';
import fetchSearchQuery from './fetchSearchQuery';

const searchApp = combineReducers({
  searchHasErrored,
  searchIsLoading,
  searchFetchDataSuccess,
  storeSearchQuery,
  searchQueryIsValid,
  fetchSearchQuery
});
console.log(searchApp);
export default searchApp;