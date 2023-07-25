/*
You are a college student and you want to stream a movie over one of the campus’s Wi-Fi networks. Based on the number of users, some networks won’t have the data to stream a movie.

Use the following Network class to track how much total data and how many users each network has:

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
}
The properties of the Network class are:

data: Total units of data supplied by the network
users: Total numbers of users currently on the network
Each user on average deducts 5 units from the network’s total data. To watch a movie you must connect to a network that has at least 10 remaining units of data.

Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.

Example:

const library = new Network(50, 9) 
library.movieTime() // returns false
*/

class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime() {
      const spareData = this.data - (this.users * 5);
      console.log(spareData);  
      if (spareData < 10) {
        return false; 
      } else {
        return true;
      } 
    }
  }
  
  const library = new Network(100, 18) 
  console.log(library.movieTime()) // returns false

  