/*
Rooster Regulation
An experimental rooster object has been developed without any tests! It’s up to you to write them.

By the end of this project you will have a fast, complete, reliable, isolated, maintainable, and expressive test suite: it will provide confidence that the rooster is functioning correctly and it will act as a form of documentation for other developers.

You can find the rooster defined in index.js. You will write a test suite in index_test.js within the test directory using the Mocha test framework and assert methods from the Node.js standard library. If you’re unsure about any of the methods, you can use the documentation linked.
*/

// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;