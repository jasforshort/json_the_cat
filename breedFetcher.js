const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  // convert the JSON string in an object
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("The requested breed was not found");
  } else {
    console.log(data[0].description);
  }
});