const request = require('request');
const args = process.argv.slice(2);

const fetcher = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (typeof data[0] === 'undefined') {
      process.stdout.write('Breed not found. Please try again.');
      process.stdout.write(`\n`);
    } else {
      process.stdout.write(data[0]['description']);
      process.stdout.write(`\n`);
    }
  });
};

fetcher(args[0]);


