import {expect} from 'chai';
import request from 'request';
import deepFreeze from 'deep-freeze';

import searchApp from './../reducers';
import searchHasErrored from './../reducers/searchHasErrored';
import searchIsLoading from './../reducers/searchIsLoading';
import searchFetchDataSuccess from './../reducers/searchFetchDataSuccess';

import fetchData from './../helpers/fetchData.js';

describe('first test', function() {
  it('should run a test', function() {
  	expect(1).to.equal(1);
  });
});

describe('module access test', function() {
  it('should have access to the fetchData function', function() {
  	expect(fetchData).to.be.a('function');
  });
});

// How do I make the fetchData function run in the test and browser environment?
describe('API access test', function() {
  it('should return a 200 response when calling the API', function(done) {
    request.get(
      {
        url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json'
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});

describe('API response test', function() {
  it('should return an object, given a URL endpoint', function(done) {
    const query = 'javascript'
    request.get(
      {
        url: `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=
${query}&prop=info&inprop=url&format=json&callback=?`
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body.slice(5, -1)).query.pages).to.be.an('object');
        done();
      }
    );
  });
});

describe('Test for searchIsLoading action', function() {
  it('should replace searchIsLoading state with passed boolean', function(done) {
    const initialState = {
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

describe('Test for unknown action', function() {
  it('should return the initial state', function(done) {
    const initialState = {
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
      searchIsLoading: false,
      searchHasErrored: false,
      searchFetchDataSuccess: {}
    };

    deepFreeze(defaultState);

    expect(searchApp()).to.deep.equal(defaultState);
    done();
  });
});