/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Please note: I am aiming for Exceeds Expectations. If my solution does not meet the requirements, I'd like to fail and try again. Thanks :) 

/*
  The 'quotes' array, containing five objects. Each of these objects contain: 
  - A quote
  - The source

  Some also contain: 
  - The citation (where it was published/mentioned)
  - The year 
  - Tags (an array with categories)
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
    tags: ['education', 'historical'], 
  },
  {
    quote: 'The person who says it cannot be done should not interrupt the person who is doing it.', 
    source: 'Chinese Proverb', 
    tags: ['historical', 'personal development']
  },
  {
    quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.', 
    source: 'William Aloysius Keane', 
    tags: ['positive outlook', 'mindfulness'], 
  },
  {
    quote: 'The more one does and sees and feels, the more one is able to do, and the more genuine may be one\'s appreciation of fundamental things like home, and love, and understanding companionship.', 
    source: 'Amelia Earhart', 
    citation: 'Redbook magazine', 
    year: '1933', 
  }
];
//An array for the random background colors
var colors = ['#6495ed', '#bcbcf2', '#ff8da1', '#36b55c', '#ff905a']; 

function getRandomQuote () {
  //Creates a random number between 0 and the length of the quotes array. 
  var randomNumber = Math.floor(Math.random() * quotes.length); 
  //Returns a random quote using the random number (for example quote 3 if the random number is equal to 3)
  return quotes[randomNumber] 
}

//Random background color function 
function getRandomColor () {
  /*Creates a random number between 0 and the length of the colors array. I was considering using the same random number as the one in the 
  getRandomQuote function, but then the color selection wouldn't be truly random, as it would be connected to the quote's position in the array*/
  var randomColorNumber = Math.floor(Math.random() * colors.length);
  //A variable using the random color number to select a color from the colors array 
  var randomColor = colors[randomColorNumber]; 
  //Selecting the body and then adding inline CSS set to the random color
  document.querySelector("body").style.backgroundColor = randomColor; 
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
  //Conditional that adds tags from the random quote, if there are any
  if (randomQuote.tags) {
    //Splitting up the array of quotes 
    randomQuote.tags.slice('');
    /*Joining the items together again with ', ' so that they will look nice when printed ('historical, educational') 
    and not like this: 'historicaleducational'*/
    markup += '<br><span class="tags">Tags: ' + randomQuote.tags.join(', ') + '</span>';
  }
  //Closing the markup 
  markup += '</p>'; 

  //Replacing the markup inside #quote-box with the new quote built above 
  document.getElementById('quote-box').innerHTML = markup; 

  //Calling the getRandomColor function to set a random background color
  getRandomColor(); 
}

//Function for loading a new quote after 20 seconds
function automaticQuote() {
  /*Calling the printQuote function after 20 seconds 
  (Used these sources two sources for the setInterval method: https://www.plus2net.com/javascript_tutorial/setinterval.php and https://www.w3schools.com/jsref/met_win_setinterval.asp)*/
  setInterval('printQuote()', 20000);
}
//Calling the automaticQuote function 
automaticQuote();

//Finding the button and adding an event listener, which in turn calls the printQuote function when the button is clicked 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

