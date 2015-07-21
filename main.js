//deals the cards
var showCards = document.getElementById("cards");
var cardContainer = document.getElementById('container');
var button = document.createElement('button');
  button.id='reset!';
  button.innerHTML = "Reset!";

showCards.onclick = function(){
  cardContainer.innerHTML = "";
  displayCards();
  showCards.innerHTML = "Redeal!";
  document.body.insertBefore(button, cardContainer);
};

// Removes card
button.onclick = function(){
  cardContainer.innerHTML = "";
  showCards.innerHTML = "Deal!";
  button.remove();

};

//run when Deal is clicked
function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  //puts cards on page
  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}

// Creates a deck of 52 cards
function newDeck(){
  // variables
  var suits = ["d", "c", "s", "h"];
  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];
  var deck = [];
//for loops
  for (i = 0; i < ranks.length; i++) {
  for (j = 0; j < suits.length; j++) {
    ranks[i].suit = suits[j];
    deck.push({
        card: ranks[i].card,
        suit: ranks[i].suit});
    }
  }
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck){
 var result = [];
 var cardDeckCopy = cardDeck.slice(0);
 cardDeckLength = cardDeckCopy.length;
 for (var i = 0; i < cardDeckLength; i++) {
   var num = Math.floor(Math.random() * cardDeckCopy.length);
   result.push(cardDeckCopy.splice(num, 1)[0]);
 }
 return result;
}

