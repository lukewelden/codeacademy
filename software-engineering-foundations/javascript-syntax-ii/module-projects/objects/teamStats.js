/*
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, 
or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: 
arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of 
their games.
*/

const team = {
    _players: [
      {
        firstName: 'Reece',
        lastName: 'James',
        age: 24
      },
      {
        firstName: 'Ben',
        lastName: 'Chillwell',
        age: 27
      },
      {
        firstName: 'Thiago',
        lastName: 'Silva',
        age: 39
      }
    ],
    _games: [
      {
        opponent: 'Manchester United',
        teamPoints: 3,
        opponentPoints: 0
      },
      {
        opponent: 'Manchester City',
        teamPoints: 2,
        opponentPoints: 1
      },
      {
        opponent: 'Arsenal',
        teamPoints: 1,
        opponentPoints: 1
      }
    ], 
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    }, 
    newPlayer(newFirstName, newLastName, newAge) {
      let newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(newPlayer); 
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(newGame); 
    }
  
  }
  // Log value of _players first then call the method and check the results
  console.log(team._players);
  team.newPlayer('Tammy', 'Abraham', 25);
  console.log(team._players);
  
  // Log value of _games first then call the method and check the results
  console.log(team._games);
  team.addGame('West Ham', 4, 0);
  console.log(team._games);