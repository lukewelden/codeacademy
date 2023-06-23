// Coverts a sentence into whale speak. Whale speak consists of only vowels, double e's and u's and is sung in a sentence with no spaces. 

const input = 'Max Verstappen is unbeatable';
const vowels = ['a','e','i','o','u'];
const resultArray = [];

// Check whether the input sentence has vowels and add them to the resultArray. Log e's and u's twice. 
for (let i = 0; i < input.length; i++){
  // console.log(input[i]);
  // Adds e or u to the array allowing for double entries
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  // If the sentence contains a vowel add it to the resultArray
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if (input[i] === vowels[j]) {
      //console.log(vowels[j]);
      resultArray.push(vowels[j]);
      break;
    }
  }
}

// Return result to the console 
//console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString); // Should return 'AEEAEEIUUEEAAEE'. 
