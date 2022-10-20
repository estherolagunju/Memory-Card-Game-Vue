
// declaration
const cards = document.querySelectorAll(".card");
let matchedParis = 0;
let cardOne, cardTwo;
let disableDeck = false;


// flipping the card
function flipCard(e){
    console.log('flipCard was executed');
    console.log(e);
    const clickedCard = e.target;

    // if (cardOne !== clickedCard && !disableDeck) { }
   if (cardOne !== clickedCard && !disableDeck) { 
    clickedCard.classList.add("flip"); 
  }

  if(!cardOne) { // if there is not yet a value assigned to the cardOne variable...
    return cardOne = clickedCard; // set the cardOne value as the clickedCard and end this function.
}
// everything below will execute if the condition above was not met (if cardOne already had a value when flipCard() was called)
cardTwo = clickedCard; // set the cardTwo value as the clickedCard
disableDeck = true; // set this to true for the next time this flipCard function is called, when the top level condition is evaluated

let cardOneImg = cardOne.querySelector(".back-view img").src; // query the elements inside cardOne to get the value of the img src, such as `images/img-2.png`, and set that as the value of cardOneImg
let cardTwoImg = cardTwo.querySelector(".back-view img").src; // query the elements inside cardTwo to get the value of the img src, such as `images/img-2.png`, and set that as the value of cardTwoImg
matchCards(cardOneImg, cardTwoImg); // now check the images by filename to see if they are a match!

}

function matchCards(img1, img2) {
    if (img1 === img2) { // this code will run if the card images match
        matchedPairs++;
    }
    
    if (matchedPairs == 8) { // if your number of matches is 8, you've made all the matches! Game Won!
        console.log('YOU WIN!');
        return; // for now, lets call this game over, end this function and do nothing else.
      }
    
      cardOne.removeEventListener("click", flipCard); // remove the eventlistener so that this matched card cannot be flipped anymore
    cardTwo.removeEventListener("click", flipCard); // remove the eventlistener so that this matched card cannot be flipped anymore
    
    cardOne = cardTwo = ""; // now reset the cardOne & cardTwo variables to empty strings, so we can use them again
    disableDeck = false;
    return;  // end function
    

    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    cardOne = cardTwo = ""; // reset the cardOne & cardTwo variables to empty string
    disableDeck = false;
    return;

}


// shuffle
function shuffleCards(){
    let matchedParis = 0;
let cardOne = cardTwo ="";
let disableDeck = false;

let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
arr.sort(() => Math.random() > 0.5 ? 1 : -1);

cards.forEach((card, i) => {
    card.classList.remove('flip');
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `images/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
});
}

shuffleCards();

// timing
setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");

    cardOne.classList.remove("shake", "flip");
cardTwo.classList.remove("shake", "flip");
  }, 400);

setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    cardOne = cardTwo = ""; // reset the cardOne & cardTwo variables to empty string
    disableDeck = false;
    return;
  }, 1200);