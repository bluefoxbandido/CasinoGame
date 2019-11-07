// //Build deck
// const card = (suit, type) =>{
//     this.suit = suit;
//     this.type = type;
// }
const suits = ["♥", "♦", "♣", "♠"];
const types = {
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
let typeKeys = Object.keys(types);
let deck = [];
for(suit in suits){
    suit = suits[suit];
    for(type in types){
        let card = {
            suit: suit,
            type: type,
            value: types[type]
        };
        deck.push(card)
    }
}
//Give User 100
let wallet = 100;
prompt('Welcome to BlackJack. You have 100 dollars')

//Player places a wager
let wager = parseInt(prompt('Enter an amount to wager'));
const deal = () => {
    const cardOne = deck[Math.floor(Math.random() * 52) -1]
    const cardTwo = deck[Math.floor(Math.random() * 52) -1]
    let userHand = [cardOne, cardTwo];
    let userValue = cardOne.value + cardTwo.value;

    const dealerOne = deck[Math.floor(Math.random() * 52) -1];
    const dealerTwo = deck[Math.floor(Math.random() * 51) -1];
    const dealerHand = [dealerOne, dealerTwo];
    const dealerValue = dealerOne.value + dealerTwo.value;

    if (dealerValue > userValue){
        wallet -= wager;
    } else if (dealerValue < userValue){
        wallet += wager;
    }
    console.log("User:  ", userHand);
    console.log("Dealer:  ", dealerHand);
    return wallet;
}
console.log(deal())
console.log(wallet)
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