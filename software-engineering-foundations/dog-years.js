// variable for storing the users age
const myAge = 31;

// Working out the first two years of the user's age in dog years 
let earlyYears = 2;
earlyYears *= 10.5;

// Taking the early years away from user's age as we've worked them out already
let laterYears = myAge - 2;
// Working out the later years in dog years 
laterYears *= 4; 

// Working out total age of the user in dog years 
const myAgeInDogYears = earlyYears + laterYears;

// Storing the user's name as all lower case 
const myName = 'Luke'.toLowerCase();

// Logging the user's name, age, and age in dog years to the console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
