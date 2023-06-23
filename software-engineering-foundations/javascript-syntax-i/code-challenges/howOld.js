/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'
*/

// Write your function here:
function howOld(age, year) {
    // Ensures inputs are of type number
    if (typeof age !== 'number') {
      return 'Invalid input: age should be a number.';
    }
  
    if (typeof year !== 'number') {
      return 'Invalid input: year should be a number.';
    }
  
    // Logging current year
    const thisYear = 2023; // TO-DO use a function to work out the year 
    const yearBorn = thisYear - age;
  
    // Main app logic 
    // Future year logic
    if (year > thisYear){ 
      const difference = year - thisYear;
      const futureAge = age + difference;
      return `You will be ${futureAge} in the year ${year}`;
    // Before user was born logic 
    } else if (year < yearBorn){
      const difference = yearBorn - year;
      return `The year ${year} was ${difference} years before you were born`;
    } 
    // Past year logic 
    else {
      const difference = thisYear - year;
      const pastAge = age - difference;  
      return `You were ${pastAge} in the year ${year}`;
    }
  
  }
  // Once your function is written, write function calls to test your code!
  console.log(howOld(31, 2024)); // Should return 'You will be 32 in the year 2024'
  console.log(howOld(31, 1990)); // Should return 'The year 1990 was 2 years before you were born'
  console.log(howOld(31, 2020)); // Should return 'You were 28 in the year 2020'