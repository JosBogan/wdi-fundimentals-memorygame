var cards =["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a Match!");
		}
		else {
			alert("Sorry, try again.");
		}
	}
}

function flipCard(cardId) {
	console.log("You flipped " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);