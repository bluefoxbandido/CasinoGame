//Build deck
const deck = () => {
    let singleDeck = [];
    const suits = {"Hearts" : "♥","Spades" : "♠","Clubs" : "♣","Diamonds" : "♦"};
    const cardValues = {
        "Ace" : 11,
        "Two" : 2,
        "Three" : 3,
        "Four" : 4,
        "Five" : 5,
        "Six" : 6,
        "Seven" : 7,
        "Eight" : 8, 
        "Nine" : 9,
        "Ten" : 10,
        "Jack" : 10,
        "Queen" : 10,
        "King" : 10
    }
    let suitKeys = Object.keys(suits);
    let counter = 0;
    let suitCounter = 0;
    for (suit in suits){
        // console.log(suit)
        for (cardValue in cardValues) {
            
        }
        suitCounter++;
    }

    return singleDeck;
}

const newDeck = deck();


//Give User 100
//Player places a wager
//Deal two cards to the dealer and to the dealer
//show players hand and show dealers top card
//if player card total is 21 they win
//player can hit
//if player card total is higher than 21, they lost
//player can pass
//if player card total is higher than dealer card total player wins
//if player card total is equal to the dealer, player push
//if player card total is less than the dealer, dealer wins
//
var response = prompt();