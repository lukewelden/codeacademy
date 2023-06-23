let userName = '';
// Says hello to the user using a name if the user specifies one or just "Hello" if they don't
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!'); 

let userQuestion = 'What is the meaning of life?';

// repeats the user's question
console.log(`${userQuestion}, you say? Well...`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8); 

// Placeholder for the returned answer
let eightBall = '';

// Switch statement that assigns answer to the eightBall variable. 
/* switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  }
  */

  // Else if statement 
  if (randomNumber == 0) {
    eightBall = 'It is certain';
  } else if (randomNumber == 1) {
    eightBall = 'It is decidedly so';
  } else if (randomNumber == 2) {
    eightBall = 'Reply hazy try again';
  } else if (randomNumber == 3) {
    eightBall = 'Cannot predict now';
  } else if (randomNumber == 4) {
    eightBall = 'Do not count on it';
  } else if (randomNumber == 5) {
    eightBall = 'My sources say no';
  } else if (randomNumber == 6) {
    eightBall = 'Outlook not so good';
  } else {
    eightBall = 'Signs point to yes';
  }

  // Respond to the end user 
  console.log(eightBall);



