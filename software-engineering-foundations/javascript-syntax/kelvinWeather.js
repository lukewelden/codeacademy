// The temp in kelvin for today
const kelvin = 0; 
// The temp in celsius for today
const celsius = kelvin - 273;
// The temp in fahrenheit for today
let fahrenheit = celsius * (9/5) + 32; 
// rounds the value of fahrenheit down to the nearest whole number
fahrenheit = Math.floor(fahrenheit);
// The temp in newton for today
let newton = celsius * (33/100); 
// rounds the value of newton down to the nearest whole number
newton = Math.floor(newton);

// log the temp in all of the temp types
console.log(`The temp today is ${kelvin}k, ${celsius}C, ${fahrenheit}f, ${newton}n.`);
