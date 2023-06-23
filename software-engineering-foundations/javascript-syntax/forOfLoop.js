// Log each letter of the spellingWord variable. 
const spellingWord = 'hippopotamus';

for (const char of spellingWord) {
  console.log(char);
}

// Log which pokemon have been caught but skip the non-pokemon Yoshi! 
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (const pokemon of pokemonList) {
  if (pokemon === 'Yoshi'){
    continue
  }
  console.log(`You caught a ${pokemon}`);
}
