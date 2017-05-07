import {expect} from 'chai';
import request from 'request';

import fetchData from './../index.js';

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
        console.log(JSON.parse(response.body.slice(5, -1)).query.pages);
        done();
      }
    );
  });
});