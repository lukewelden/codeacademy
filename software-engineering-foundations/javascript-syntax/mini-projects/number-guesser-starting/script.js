// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Function to return a random number between 0-9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Function to get the absolute distance between the guess and the target number
function getAbsoluteDistance(guess, targetNumber) {
  let difference = 0
  if (guess > targetNumber) {
    difference = guess - targetNumber; 
  } else if (guess < targetNumber) {
    difference = targetNumber - guess;
  }

  return difference
}

// Function to compare the computer and user guesses
function compareGuesses(userGuess, computerGuess, targetNumber) {
  // Validate user guess is 0 - 9
  if (userGuess > 9 || userGuess < 0) {
    alert('Number is out of range'); 
  }

  // Working out user difference to the target number
  const userDifference = getAbsoluteDistance(userGuess, targetNumber);

  // Working out computer difference to the target number
  const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

  // Working out who's closer to the target number 
  let didUserWin = null 
  if (userDifference == computerDifference) {
    didUserWin = true;
  } else if (userDifference > computerDifference) {
    didUserWin = false;
  } else {
    didUserWin = true;
  }
  return didUserWin;
}

// Function to update the score of the game 
function updateScore(winner) {
  // let computerScore = 0 
  // let humanScore = 0
  if (winner === 'human') {
    humanScore++
  } else {
    computerScore++ 
  } 
}

// Function to increase the round number after a game has been played 
function advanceRound() {
  return currentRoundNumber++
}



