import request from 'request';

function fetchData(url) {
  request.get(
    {url},
    function(error, response, body) {
      return JSON.parse(body);
    }
  );
}

module.exports = fetchData;