/*
Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
If you’re looking for a challenge, try to create the four classes without using the steps below.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating() {
    return Math.round(this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length);
  }

  toggleCheckoutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

const swordOfDestiny = new Book('Andrez Sapowski', 'The Sword Of Destiny', 300);

// Testing instance of a Book 
console.log(swordOfDestiny.author);
console.log(swordOfDestiny.pages);
console.log(swordOfDestiny.title);
console.log(swordOfDestiny.isCheckedOut);
console.log(swordOfDestiny.ratings);

// Testing checkout method 
swordOfDestiny.toggleCheckoutStatus();
console.log(swordOfDestiny.isCheckedOut);
swordOfDestiny.toggleCheckoutStatus();
console.log(swordOfDestiny.isCheckedOut);

// Testing add rating method 
swordOfDestiny.addRating(5);
swordOfDestiny.addRating(4);
swordOfDestiny.addRating(4);
console.log(swordOfDestiny.ratings);

// Testing average rating method 
console.log(swordOfDestiny.getAverageRating());

console.log('');

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const dieHard = new Movie('Die Hard', 'John McTiernan', 132);

// Testing instance of the Movie class. 
console.log(dieHard.title);
console.log(dieHard.director);
console.log(dieHard.runTime);

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}
 
const fooFighters = new CD('The Greatest Hits', 'Foo Fighters', ["The Best Of You", "Everlong", "Run"]);

// Testing instance of the CD class.
console.log(fooFighters.title);
console.log(fooFighters.artist);
console.log(fooFighters.songs);
