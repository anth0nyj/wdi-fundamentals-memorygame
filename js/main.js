var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
console.log("User flipped " + cardOne + ".");
cardsInPlay.push(cardOne);
//console.log("User's current hand: " + cardsInPlay.join(", ") + ".");

var cardTwo = cards[2];
console.log("User flipped " + cardTwo + ".");
cardsInPlay.push(cardTwo);
//console.log("User's current hand: " + cardsInPlay.join(", ") + ".");

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}