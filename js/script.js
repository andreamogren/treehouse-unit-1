/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
  The 'quotes' array, containing five objects. Each of these objects contain: 
  - A quote
  - The source
  - The citation (where it was published/mentioned)
  - The year 
*/
var quotes = [
  {
    quote: 'It\'s easier to ask forgiveness than it is to get permission.', 
    source: 'Grace Hopper', 
    citation: 'Navy\'s Chips Ahoy magazine', 
    year: '1986', 
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
    quote: 'The more one does and sees and feels, the more one is able to do, and the more genuine may be one\'s appreciation of fundamental things like home, and love, and understanding companionship.', 
    source: 'Amelia Earhart', 
    citation: 'Redbook magazine', 
    year: '1933', 
  }
];

function getRandomQuote () {
  //Creates a random number between 0 and the length of the quotes array. 
  var randomNumber = Math.floor(Math.random() * quotes.length); 
  //Returns a random quote using the random number (for example quote 3 if the random number is equal to 3)
  return quotes[randomNumber] 
}

function printQuote () {
  //Creates a variable which calls getRandomQuote and stores the value/object returned 
  var randomQuote = getRandomQuote(); 
  //Creates a variable that contains an empty string 
  var markup = ''; 
  //Adding HTML markup and quote from the random quote 
  markup += '<p class="quote">' + randomQuote.quote + '</p>'; 
  //Building onto the markup, adding the source from the random quote 
  markup += '<p class="source">' + randomQuote.source; 
  //Conditional that adds the citation from the random quote, if there is one 
  if (randomQuote.citation) {
    markup += '<span class="citation">' + randomQuote.citation + '</span>'; 
  }
  //Conditional that adds the year from the random quote, if there is one 
  if (randomQuote.year) {
    markup += '<span class="year">' + randomQuote.year + '</span>'; 
  }
  //Closing the markup 
  markup += '</p>'; 

  //Replacing the markup inside #quote-box with the new quote built above 
  document.getElementById('quote-box').innerHTML = markup; 
}

//Finding the button and adding an event listener, which in turn calls the printQuote function when the button is clicked 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
