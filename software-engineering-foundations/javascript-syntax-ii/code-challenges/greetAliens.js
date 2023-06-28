/*
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with
each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/

// Write your code here:
const greetAliens = array => {
    for (let word in array) {
      console.log(`Oh powerful ${array[word]}, we humans offer our unconditional surrender!`)
    }
  }
  // When you're ready to test your code, uncomment the below and run:
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);