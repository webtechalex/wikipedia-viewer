import {combineReducers} from 'redux';

import searchHasErrored from './searchError';
import searchIsLoading from './searchLoading';
import searchResponseData from './searchResponseData';
import searchQuery from './searchQuery';
import searchQueryIsValid from './searchQueryValid';

const searchApp = combineReducers({
  searchQuery,
  searchIsLoading,
  searchHasErrored,
  searchQueryIsValid,
  searchResponseData
});
export default searchApp;