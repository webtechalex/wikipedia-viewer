import {expect} from 'chai';
import deepFreeze from 'deep-freeze';
import {empty} from './mocks/empty.js';
import searchApp from '../app/reducers';

const initialState = {
  searchQuery: '',
  searchIsLoading: false,
  searchHasErrored: false,
  searchResponseData: null,
  searchQueryIsValid: true
};

deepFreeze(initialState);

describe('Test for searchIsLoading action', function() {
  it('should replace searchIsLoading state with passed boolean', function(done) {

    const action = {
      type: 'SEARCH_IS_LOADING',
      searchIsLoading: true
    };

    deepFreeze(action);

    const newState = {
      searchQuery: '',
      searchIsLoading: true,
      searchHasErrored: false,
      searchResponseData: null,
      searchQueryIsValid: true
    }
    expect(searchApp(initialState, action)).to.eql(newState);
    done();
  });
});

describe('Test for searchHasErrored action', function() {
  it('should replace searchHasErrored state with passed boolean', function(done) {
    const action = {
      type: 'SEARCH_HAS_ERRORED',
      searchHasErrored: true
    };

    deepFreeze(action);

    const newState = {
      searchQuery: '',
      searchIsLoading: false,
      searchHasErrored: true,
      searchResponseData: null,
      searchQueryIsValid: true
    }

    expect(searchApp(initialState, action)).to.eql(newState);
    done();
  });
});

describe('Test for searchFetchDataSuccess action', function() {
  it('should replace searchFetchDataSuccess state with passed object', function(done) {
    const action = {
      type: 'SEARCH_FETCH_DATA_SUCCESS',
      searchResponseData: {
        fruit: 'oranges',
        animals: 'cats',
        places: 'cities',
        drinks: 'spirits'
      }
    };

    deepFreeze(action);

    const newState = {
      searchQuery: '',
      searchIsLoading: false,
      searchHasErrored: false,
      searchResponseData: {
        fruit: 'oranges',
        animals: 'cats',
        places: 'cities',
        drinks: 'spirits'
      },
      searchQueryIsValid: true
    }

    expect(searchApp(initialState, action)).to.eql(newState);
    done();
  });
});

describe('Test for updateSearchQuery action', function() {
  it('should replace searchQuery state with passed string', function(done) {
    const searchQuery = 'foo';

    const action = {
      type: 'UPDATE_SEARCH_QUERY',
      searchQuery
    }

    deepFreeze(action);

    const newState = {
      searchQuery,
      searchIsLoading: false,
      searchHasErrored: false,
      searchResponseData: null,
      searchQueryIsValid: true
    }

    expect(searchApp(initialState, action)).to.eql(newState);
    done();
  });
});

describe('Test for unknown action', function() {
  it('should return the initial state', function(done) {

    const action = {
      type: 'SEARCH_BLAH',
      blah: {
        foo: 'bar'
      }
    };

    deepFreeze(action);

    expect(searchApp(initialState, action)).to.equal(initialState);
    done();
  });
});

describe('Test for no params', function() {
  it('should return the default state', function(done) {
    expect(searchApp()).to.eql(initialState);
    done();
  });
});