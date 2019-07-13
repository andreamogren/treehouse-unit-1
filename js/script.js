/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote: "It's easier to ask forgiveness than it is to get permission.", 
    source: 'Grace Hopper', 
    citation: "Navy's Chips Ahoy magazine", 
    year: 'July 1986', 
  },
 {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 
    source: 'Benjamin Franklin', 
    citation: '', 
    year: '', 
  },
  {
    quote: 'The person who says it cannot be done should not interrupt the person who is doing it.', 
    source: 'Chinese Proverb', 
    citation: '', 
    year: '', 
  },
  {
    quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.', 
    source: 'William Aloysius Keane', 
    citation: '', 
    year: '',
  },
  {
    quote: "The more one does and sees and feels, the more one is able to do, and the more genuine may be one's appreciation of fundamental things like home, and love, and understanding companionship.", 
    source: 'Amelia Earhart', 
    citation: 'Redbook magazine', 
    year: 'September 1933', 
  }
];

console.log(quotes); 

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length); 
  console.log(randomNumber, quotes[randomNumber]); 
  return quotes[randomNumber] 
}

getRandomQuote(); 

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote () {
  var randomQuote = getRandomQuote(); 
  var markup = ''; 
  markup += '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source; 
  if (randomQuote.citation) {
    markup += '<span class="citation">' + randomQuote.citation + '</span>'; 
  }
  if (randomQuote.year) {
    markup += '<span class="year">' + randomQuote.year + '</span>'; 
  }
  markup += '</p>'; 

  document.getElementById('quote-box').innerHTML = markup; 
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.