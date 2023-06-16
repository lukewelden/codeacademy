// Creates a race number from 0 - 1000
let raceNumber = Math.floor(Math.random() * 1000);

// Is the racer an early are late register
let earlyRegister = true;

// Runner's age 
let runnerAge = 31;

// Adds a 1000 to the racenumber for anyone over the age of 18
if (earlyRegister == true && runnerAge > 18) {
  raceNumber += 1000
}

// Conditional statement to tell the runner when their race is starting. 
if (earlyRegister === true && runnerAge > 18) {
  console.log(`You will be racing at 9:30. with the number ${raceNumber}`); 
} else if (earlyRegister === false && runnerAge > 18) {
  console.log(`You will be racing at 11:30. with the number ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will be racing at 12:30 young person! with the number ${raceNumber}`)
} else {
  console.log('Please see registration desk.')
}
