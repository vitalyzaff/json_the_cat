const fetcher = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetcher('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  it('returns that an invalid/non-existent breed is passed in.', (done) => {
    fetcher('unknown', (err, desc) => {
      const expectedDesc = "Breed not found. Please try again.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });


});