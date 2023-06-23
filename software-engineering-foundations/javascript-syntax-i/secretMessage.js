let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove last item in the array
secretMessage.pop();


// Add two items to the array 
secretMessage.push('to','program');

// Replace 'easily' with 'right'
secretMessage[7] = 'right';

// Remove the first string 
secretMessage.shift();

// Add 'Programming to the beginning 
secretMessage.unshift('Programming');

// Remove get -> time with know 
secretMessage.splice(6, 5, 'know');

// Logging the secret message 
console.log(secretMessage.join());
