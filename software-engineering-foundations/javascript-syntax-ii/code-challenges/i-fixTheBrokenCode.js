/*
We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and 
calculate the smallest power of two which is greater than or equal to the current element before using .push() 
to add it to results.

It’s not doing what we want. Can you fix our code, please?

-------------------------BROKEN CODE-------------------------------------------------------------------
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            i = 1;
            while (i < number) {
                  i = i * 2;
            }
            results.push(i);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
---------------------------------------------------------------------------------------------------------
*/

const numbers = [5, 3, 9, 30];
const numbersTwo = [45,29,35,43,26,47,69];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            
            let j = 1; 
            while (j < number) {
                  j = j * 2;
                  // console.log(j)
            }
            results.push(j);
            //console.log(results);
            
      }
      return results
}

console.log(smallestPowerOfTwo(numbers))
console.log(smallestPowerOfTwo(numbersTwo))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

