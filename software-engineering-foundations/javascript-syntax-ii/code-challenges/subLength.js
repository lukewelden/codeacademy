/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

// Write function below
const subLength = (str, char) => {
  // Check how many chars are in str
  const count = str.split(char).length -1;

  if (count <= 1 || count > 2) {
    return 0
  } else {
    const indexOne = str.indexOf(char);
    //console.log(`The first ${char} is at the index of ${indexOne}`);
    const indexTwo = str.indexOf(char, (indexOne +1));
    //console.log(`The second ${char} is at the index of ${indexTwo}`);
    return (indexTwo - indexOne) + 1;
  }
  
}

console.log(subLength('cheesecake', 'k'));
console.log(subLength('summer', 'm'));
console.log(subLength('digitize', 'i'));
