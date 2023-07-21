/*
School Catalogue
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle
Does not include any additional properties or methods
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
If you’re looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.
*/

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents; 
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(num) {
    if (typeof num === 'number') {
      this._numberOfStudents = num;
    }
    return "Invalid input: numberOfStudents must be set to a Number."; 
  }

  quickFacts(){
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`
  }

  static pickSubstituteTeacher(substituteTeachers){
    let rand = Math.floor(Math.random() * (substituteTeachers.length));
    return substituteTeachers[rand]; 
  }
}
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}

// Testsing instance of a Primary School
const failsworthPrimary = new Primary(
  'Failsworth Primary School', 
  100, 
  'Students must be picked up by a parent, guardian, or a family member over the age of 13'
  );
  
console.log(failsworthPrimary.level); // returns primary
console.log(failsworthPrimary.quickFacts()); // returns Failsworth Primary School educates 100 students at the primary school level
console.log(failsworthPrimary.pickupPolicy); // returns 3:30PM - 4:30PM

// Testing pickSubstituteTeacher method 
console.log(School.pickSubstituteTeacher(['Miss McGrath', 'Mr Welden', 'Mr Maverick'])); // returns on of the string values of the array randomly. 

