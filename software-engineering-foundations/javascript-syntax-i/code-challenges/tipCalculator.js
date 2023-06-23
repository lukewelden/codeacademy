/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20
*/

// Write your function here:
function tipCalculator(quality, cost) {
    if (quality === 'bad') {
      return (cost * 5) / 100;
    } 
    else if (quality === 'ok') {
      return (cost * 15) / 100;
    }
    else if (quality === 'good') {
      return (cost * 20) / 100;
    }
    else if (quality === 'excellent') {
      return (cost * 30) / 100;
    } 
    else {
      return (cost * 18) / 100;
    }
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(tipCalculator('good', 100)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(tipCalculator('ok', 100)) //should return 15
  console.log(tipCalculator('bad', 100)) //should return 5
  console.log(tipCalculator('excellent', 100)) //should return 30
  console.log(tipCalculator('cheese', 100)) //should return 18
  