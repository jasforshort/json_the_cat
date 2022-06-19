const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      // convert the JSON string in an object
      const data = JSON.parse(body);
      if (data.length === 0) {
        error = "The requested breed was not found";
        callback(error);
      } else {
        callback(error, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };