const assert = require('assert'); 
const Rooster  = require('../index.js');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup 
      const expected = 'cock-a-doodle-doo!'

      // Exercise: Call Rooster.announceDawn 
      const result = Rooster.announceDawn();

      // Verify
      assert.equal(result, expected); 
      }); 
    });
  describe('.timeAtDawn', () => {
    it('Returns its argument as a string', () => {
      //Setup
      const hour = 8
      const expected = '8'
      // Exercise
      const result = Rooster.timeAtDawn(hour); 
      // Verify
      assert.strictEqual(result, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const hour = -1;
      // Exercise 
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        RangeError
      );
    });
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const hour = 24;
      // Exercise 
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        RangeError
      );
    });
  });
});