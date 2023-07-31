// Import the encryptors functions here.
const encryptors = require('./encryptors.js')

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const caesar = encryptors.caesarCipher(str, 15);
  const reverse = encryptors.reverseCipher(caesar);
  const final = encryptors.symbolCipher(reverse);
  return final; 
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const symbol = encryptors.symbolCipher(str);
  const reverse = encryptors.reverseCipher(symbol);
  const final = encryptors.caesarCipher(reverse, -15);
  return final;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);