var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('Checks 5! is equal to 120', () => {
      // Setup
      const expectedResult = 120;
      const num = 5;
      // Exercise
      const result = Calculate.factorial(num);
      // Verify
      assert.strictEqual(result, expectedResult);
    });
    it('Checks 3! is equal to 6', () => {
      // Setup
      const expectedResult = 6;
      const num = 3;
      // Exercise
      const result = Calculate.factorial(num);
      // Verify
      assert.strictEqual(result, expectedResult);
    });
    it('Check 0! is 1', () => {
      // Setup
      const expectedResult = 1;
      const num = 0;
      // Exercise
      const result = Calculate.factorial(num);
      // Verify
      assert.strictEqual(result, expectedResult);
    });
  });
});