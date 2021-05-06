const request = require('request');

const fetcher = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    if (typeof data[0] === 'undefined') {
      return callback(null, 'Breed not found. Please try again.');
    }
    callback(null, data[0]['description']);
  });
};

module.exports = fetcher;




