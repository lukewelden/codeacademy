/*
In this project, you’ll use what you know about iterating over arrays 
to gather information and improve the quality of a paragraph.
*/

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Function for calculate how many words are in the story and log them to the console. 
function wordCount(){
  let count = 0;
  storyWords.forEach(word => { count++;});
  console.log(`The story contains ${count} words.\n`);
  };

// wordCount();

// Remove the world 'literally' from the story. 
storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
})
wordCount();

// Correct mispelled words 
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beatiful'; 
  } else {
    return word;
  }
});

// Find the bad word 
const badWordIndex = storyWords.findIndex((word) => word === badWord);
//console.log(`Bad word at index: ${badWordIndex}`);
// Replace bad word
storyWords[badWordIndex] = 'really';

// Check if all words in the story are less than 10 characters long
let lengthCheck = storyWords.every((word) => word.length <= 10)
//console.log(lengthCheck);

// Find the long word 
let longWordIndex = storyWords.findIndex((word) => word.length > 10);
//console.log(`Long word at index: ${longWordIndex}`);
// Replace the long word
storyWords[longWordIndex] = 'stunning';


// Log new story to the console
const newStory = storyWords.join(' ');
console.log(newStory)
