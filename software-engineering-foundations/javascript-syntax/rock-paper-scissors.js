// ROCK PAPER SCISSORS GAME 

// Function that takes a user input and ensures that it is either rock, paper, or scissors. 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors' && userInput !== 'bomb') {
      console.log('Pick rock, paper, or scissors, Dummy!');
    } else {
      return userInput;
    }
  }
  
  // Function that randomly chooses rock, paper, or scissors. 
  const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
      case 0: 
        computerChoice = 'rock';
        break;
      case 1: 
        computerChoice = 'paper';
        break;
      case 2: 
        computerChoice = 'scissors';
        break;
    }
    return computerChoice;
  }
  
  // Function to determine the winner based on the above two function's outputs. 
  const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'It\'s a tie!';
      }
      else if (userChoice === 'rock') {
          if (computerChoice === 'paper') {
              return 'You lose!';
          } else {
              return 'You win!';
          }
      }
      else if (userChoice === 'paper') {
          if (computerChoice === 'scissors') {
              return 'You lose!';
          } else {
              return 'You win!';
          }
      }
      else if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
              return 'You lose!';
          } else {
              return 'You win!';
          }
      }
      else if (userChoice === 'bomb') {
        return 'You bombed the computer!';
      }
  }
  
  // Function to play the game 
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice(); 
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice)); 
  }
  
  // Playing the game! 
  playGame();