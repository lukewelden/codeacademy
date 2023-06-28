/*
A restaurant has hired you to create a function for their website that allows them to set a meal and price each 
morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new 
function can generate a meal and a price for Today’s Special without any embarrassing errors!
*/

/*
A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!
*/

const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.log('Set the meal as a string, dummy!');
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.log('Set the price as a number, dummy!');
      }
    }, 
    get todaysSpecial(){
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} for only £${this._price}`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  }
  
  console.log(menu.todaysSpecial);
  
  /*
  If you want to extend your learning on this project, try adding an array of meals and prices to randomly set and get Today’s Special!
  */
  
  // List of meals and prices
  const meals = ['hamburger', 'cheeseburger', 'chickenburger'];
  const prices = [1,2,3];
  
  // Creating a random number between 0-2
  const random = Math.floor(Math.random() * 3);
  
  // Use random number as index for the array's above 
  menu.meal = meals[random];
  menu.price = prices[random];
  
  // log the random special to the console. 
  console.log(menu.todaysSpecial);