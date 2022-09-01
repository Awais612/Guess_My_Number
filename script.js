"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Guess the Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 19;

// console.log(document.querySelector(".guess").value);
// Generating the random number for the guess between the 1 and 20

const random_guess_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// console.log(score);

/* 
To check whether the correct number is displaying or not
document.querySelector(".number").textContent = random_guess_number;
 */

document.querySelector(".check");
//these are the event handler and they are also the built-in that we can use in the JS
document.querySelector(".check").addEventListener("click", function () {
  const guess_Number = Number(document.querySelector(".guess").value);
  //   console.log(typeof guess_Number);
  if (!guess_Number) {
    document.querySelector(".message").textContent =
      "⛔No Number Please Enter the number between 1 and 20";
  } else if (guess_Number === random_guess_number) {
    document.querySelector(".message").textContent = "🎉Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = random_guess_number;
    document.querySelector(".highscore").textContent = score;
  } else if (guess_Number < random_guess_number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Number is low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
    }
  } else if (guess_Number > random_guess_number) {
    document.querySelector(".message").textContent = "Number is High";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
// Implementing the again button functionality
document.querySelector(".again").addEventListener("click", function () {
  let score = 20;

  document.querySelector(".score").textContent = score;
  const random_guess_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = 0;
});
