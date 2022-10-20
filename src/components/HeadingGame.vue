<template>
    <div class="main">
        <h1 class="head">
         Card Matching Game!
        </h1>
      <div class="details">
        <slot>Instructions</slot>
        <ul>
            <li>There are 16 Cards, </li>
            <li>Click on two cards to flip over</li>
            <li>Ensure they match</li>
            <li>Repeat till you match all the 16 cards</li>
        </ul>
      </div>
    </div>
  </template>

<style scoped>
.head{
    color: white;
}
.details{
    color: rgb(137, 242, 32);
}

@media (min-width: 1024px) {
}
</style>