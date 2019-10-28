// Array of all possible cards

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = []; //Array for cards in play

var shuffleCards = []; //Array for shuffled cards

var score = 0; // Score Variable

// shuffle cards array and set shuffled array

function shuffle() {
	shuffleCards = cards.sort(function(a,b){return 0.5 - Math.random()});
}

// function that checks for a match and adds to score

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a Match!");
			score++;
			document.getElementById('score').textContent = score;

		}
		else {
			alert("Sorry, try again.");
		}
	}
}

//function that relates the cardId to an index in the shuffled array, sets the image and funs the match check

function flipCard() {
	var cardId = this.getAttribute('data-id');
	/* Debug --------
	console.log("You flipped " + shuffleCards[cardId].rank + ".");
	console.log(shuffleCards[cardId].suit);
	console.log(shuffleCards[cardId].cardImage); */
	cardsInPlay.push(shuffleCards[cardId].rank); 
	this.setAttribute('src', shuffleCards[cardId].cardImage);
	checkForMatch();
}

// function that creates the gameboard elements referencing the length of the cards array, adds the id and click event listener

function createBoard() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

// reset function, changes img to backs, and wipes the cards in play

function resetFunc() {
	var cardArray = document.getElementsByTagName('img');
	for (i = 0; i < cardArray.length; i++) {
		cardArray[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
}

// Shuffle function does the same as reset with shuffle involved as well

function shuffleFunc() {
	resetFunc();
	shuffle();
}

// reset button event

document.getElementById('reset').addEventListener('click', resetFunc);

document.getElementById('shuffle').addEventListener('click', shuffleFunc);

// Set initial Score

document.getElementById('score').textContent = score;

// Load functions

createBoard();
shuffle();

