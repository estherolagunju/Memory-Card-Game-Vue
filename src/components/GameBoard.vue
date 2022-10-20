<script>
import CardView from "./CardView.vue";
import cardData from "../data/memoryCards8.js";

export default {
  components: {
    CardView,
  },
  data() {
    return {
      cardsData: cardData.concat(cardData),
      matchedPairs: 0,
      cardOne: "",
      cardTwo: "",
      disableDeck: false,
    };
  },
  mounted() {
    this.shuffleCards();
  },

  methods: {
    shuffleCards() {
    this.matchedPairs = 0; 
    this.disableDeck = false; 
    this.cardOne = "";
    this.cardTwo = ""; 
    this.cardsData = this.cardsData.sort(function () {
      return 0.5 - Math.random();
    });
  },

  flipCard(evt) {
  const clickedCard = evt.target; 
  if (clickedCard.classList.contains("matched")) return;
  if (this.cardOne !== clickedCard && !this.disableDeck) { 
    clickedCard.classList.add("flip");
    if (!this.cardOne) {
      
      return (this.cardOne = clickedCard); 
    }
    
    this.cardTwo = clickedCard; 
    this.disableDeck = true; 
    let cardOneImg = this.cardOne.querySelector(".back-view img").src; 
    let cardTwoImg = this.cardTwo.querySelector(".back-view img").src; 
    this.matchCards(cardOneImg, cardTwoImg); 
  }
},

matchCards(img1, img2) {
  if (img1 === img2) {
   
    this.matchedPairs++; 
    if (this.matchedPairs == 8) {
      
      console.log(`YOU WIN!`);
      return; 
    }
    this.cardOne.classList.add("matched"); 
    this.cardTwo.classList.add("matched"); 
    this.cardOne = ""; 
    this.cardTwo = "";
    this.disableDeck = false;
    return; 
  }
  setTimeout(() => {
    this.cardOne.classList.add("shake");
    this.cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    this.cardOne.classList.remove("shake", "flip");
    this.cardTwo.classList.remove("shake", "flip");
    this.cardOne = "";
    this.cardTwo = ""; 
    this.disableDeck = false;
    return;
  }, 1200);
},
  }
}
</script>


<template>
    <div class="game-board">
    <ul class="cards">
      <li v-for="(cardInfo, index) in cardsData" :key="index" class="card" @click="flipCard">
        <CardView viewType="front" />
        <CardView viewType="back" :imageUrl="cardInfo.url" :imageAltText="cardInfo.altText" />
      </li>
    </ul>
  </div>
  </template>

<!-- <main>a
  <div class="game-board">
    <p>I am the GameBoard.vue component</p>
    <ul class="cards">
      <li class="card">
        <div class="view front-view">
          <img src="../static_site/images/que_icon.svg" alt="hidden card">
        </div>
        <div class="view back-view">
          <img src="../static_site/images/img-1.png" alt="An emerald cut into a diamond shape.">
        </div>
      </li>
    </ul>
  </div>
</main> -->
