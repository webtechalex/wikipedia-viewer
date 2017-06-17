import {expect} from 'chai';
import fetch from 'isomorphic-fetch';
import deepFreeze from 'deep-freeze';
import {empty} from './mocks/empty.js';

import searchApp from './../reducers';
import storeSearchQuery from './../reducers/storeSearchQuery'
import searchHasErrored from './../reducers/searchHasErrored';
import searchIsLoading from './../reducers/searchIsLoading';
import searchFetchDataSuccess from './../reducers/searchFetchDataSuccess';


describe('first test', function() {
  it('should run a test', function() {
  	expect(1).to.equal(1);
  });
});

// fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json')
// fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&prop=info&inprop=url&format=json&callback=?`)
//   .then(response => response.json())
//     .then(json => dispatch(searchFetchDataSuccess()))

describe('Test for searchIsLoading action', function() {
  it('should replace searchIsLoading state with passed boolean', function(done) {
    const initialState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    const action = {
      type: 'SEARCH_IS_LOADING',
      searchIsLoading: true
    };

    deepFreeze(initialState);
    deepFreeze(action);

    const newState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: true,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    }

    expect(searchApp(initialState, action)).to.deep.equal(newState);
    done();
  });
});

describe('Test for searchHasErrored action', function() {
  it('should replace searchHasErrored state with passed boolean', function(done) {
    const initialState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    const action = {
      type: 'SEARCH_HAS_ERRORED',
      searchHasErrored: true
    };

    deepFreeze(initialState);
    deepFreeze(action);

    const newState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: true,
      searchFetchDataSuccess: {}
    }

    expect(searchApp(initialState, action)).to.deep.equal(newState);
    done();
  });
});

describe('Test for searchFetchDataSuccess action', function() {
  it('should replace searchFetchDataSuccess state with passed object', function(done) {
    const initialState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    const action = {
      type: 'SEARCH_FETCH_DATA_SUCCESS',
      searchFetchDataSuccess: {
        fruit: 'oranges',
        animals: 'cats',
        places: 'cities',
        drinks: 'spirits'
      }
    };

    deepFreeze(initialState);
    deepFreeze(action);

    const newState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {
        fruit: 'oranges',
        animals: 'cats',
        places: 'cities',
        drinks: 'spirits'
      }
    }

    expect(searchApp(initialState, action)).to.deep.equal(newState);
    done();
  });
});

describe('Test for storeSearchQuery action', function() {
  it('should replace searchQuery state with passed string', function(done) {
    const initialState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    const storeSearchQuery = 'foo';

    const action = {
      type: 'STORE_SEARCH_QUERY',
      storeSearchQuery
    }

    const newState = {
      storeSearchQuery,
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    }

    expect(searchApp(initialState, action)).to.deep.equal(newState);
    done();
  });
});

describe('Test for searchQueryIsValid action', function() {
  it('should replace searchQueryIsValid state with passed boolean', function(done) {
    const initialState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    const action = {
      type: 'SEARCH_QUERY_IS_VALID',
      searchQueryIsValid: false
    }

    const newState = {
      storeSearchQuery: '',
      searchQueryIsValid: false,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    }

    expect(searchApp(initialState, action)).to.deep.equal(newState);
    done();
  });
});

describe('Test for unknown action', function() {
  it('should return the initial state', function(done) {
    const initialState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    const action = {
      type: 'SEARCH_BLAH',
      blah: {
        foo: 'bar'
      }
    };

    deepFreeze(initialState);
    deepFreeze(action);

    expect(searchApp(initialState, action)).to.deep.equal(initialState);
    done();
  });
});

describe('Test for no params', function() {
  it('should return the default state', function(done) {
    const defaultState = {
      storeSearchQuery: '',
      searchQueryIsValid: true,
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    deepFreeze(defaultState);

    expect(searchApp()).to.deep.equal(defaultState);
    done();
  });
});