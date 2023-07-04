/*
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
*/

// Write your code here:
const dogFactory = (_name, _breed, _weight) => {
  return {
    _name,
    _breed,
    _weight,
    get name() {
      return this._name; 
    },
    set name(newName) {
      // Verify string
      if (typeof newName === 'string' && newName.length > 0){
      this._name = newName; 
      } else {
        console.log("ERROR: name must be a non-empty string"); 
      }
    },
    get breed() {
      return this._breed; 
    },
    set breed(newBreed) {
      this._breed = newBreed; 
    },
    get weight() {
      return this._weight; 
    },
    set weight(newWeight) {
      this._weight = newWeight; 
      },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++; 
    }
  }
}

