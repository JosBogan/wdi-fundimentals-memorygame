var cards =["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a Match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

console.log(cardsInPlay[0]);
console.log(cardsInPlay[1]);