/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last 
two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/

// Write function below
const groceries = arr => {
  let newArr = []
  for (let i in arr) {
    newArr.push(arr[i].item);
  }

  if (newArr.length <= 1) {
  // For an empty list or a single element, return the original list as is
  return newArr.join(', ');
} else {
  const lastElement = newArr.pop();  // Remove the last element from the list
  const formattedList = `${newArr.join(', ')} and ${lastElement}`;  // Concatenate the list with the last element

  return formattedList;
  }
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
// returns 'Lettuce, Onions and Tomatoes'
