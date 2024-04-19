"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const initializeGame = () => {

};


const updateTextContent = (selector, content) => {
  document.querySelector(selector).textContent = content;
};

const updateScore = (newScore) => {
  document.querySelector(".score") = newScore;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".checkbox-input").value);

  // When no number input
  if (!guess) {
    updateTextContent(".guess-text", "⛔ No number!");
    // When player wins
  } else if (guess < 0 || guess > 20) {
    updateTextContent(".guess-text", "Range is 0-20");
  } else if (guess === secretNumber) {
    updateTextContent(".guess-text", "Correct guess 😎");
    document.querySelector(".guess-box-number").textContent = secretNumber;
    document.querySelector(".highscore").textContent =
      score > highscore ? (highscore = score) : highscore;

    // style changes
    document.querySelector("body").style.backgroundColor = "#fff3bf";
    document.querySelector(".section-description").style.backgroundColor =
      "#69db7c";
    document.querySelector(".section-game").style.backgroundColor = "#40c057";
    document.querySelector(".guess-box").style.backgroundColor = "#ffe066";
    document.querySelector(".guess-box").style.color = "#333";
    document.querySelector(".guess-text").style.color = "#fff";
    document.querySelector(".scores-box").style.color = "#fff";
    document.querySelector(".icon").style.fill = "#fff";
    document.querySelector(".heading-primary").style.color = "#ffe066";
    document.querySelector(".heading-secondary").style.color = "#fff";
    document.querySelector(".paragraph").style.backgroundColor = "#333";
    document.querySelector(".paragraph-text").style.color = "#fff";
    document.querySelector(".btn-new").style.backgroundColor = "#ffe066";
    document.querySelector(".btn-new").style.border = "#ffe066";
    document.querySelector(".btn-new").style.color = "#333";
    document.querySelector(".btn-check").style.backgroundColor = "#ffe066";
    document.querySelector(".btn-check").style.border = "#ffe066";
    document.querySelector(".btn-check").style.color = "#333";
    document.querySelector(".footer").style.backgroundColor = "#fff";

    // When guess is wrong
  } else if (guess !== secretNumber) {
    // When guess is higher or lower
    if (score > 1) {
      updateTextContent(
        ".guess-text",
        guess > secretNumber ? "Too high!!" : "Too low!!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      updateTextContent(".guess-text", "🙈 You lost the game");
    }
  }
});

// Reset
document.querySelector(".btn-new").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".checkbox-input").value = "";
  updateTextContent(".guess-text", "Start guessing...");
  document.querySelector(".guess-box-number").textContent = "?";
  // style changes
  document.querySelector("body").style.backgroundColor = "#51cf66";
  document.querySelector(".section-description").style.backgroundColor =
    "#fff3bf";
  document.querySelector(".section-game").style.backgroundColor = "#ffec99";
  document.querySelector(".guess-box").style.backgroundColor = "#40c057";
  document.querySelector(".guess-box").style.color = "#fff";
  document.querySelector(".guess-text").style.color = "#333";
  document.querySelector(".scores-box").style.color = "#333";
  document.querySelector(".icon").style.fill = "#333";
  document.querySelector(".heading-primary").style.color = "#69db7c";
  document.querySelector(".heading-secondary").style.color = "#333";
  document.querySelector(".paragraph").style.backgroundColor = "#fff";
  document.querySelector(".paragraph-text").style.color = "#333";
  document.querySelector(".btn-new").style.backgroundColor = "#51cf66";
  document.querySelector(".btn-new").style.border = "#51cf66";
  document.querySelector(".btn-new").style.color = "#333";
  document.querySelector(".btn-check").style.backgroundColor = "#51cf66";
  document.querySelector(".btn-check").style.border = "#51cf66";
  document.querySelector(".btn-check").style.color = "#333";
  document.querySelector(".footer").style.backgroundColor = "#fff3bf";
});

// quicker way to reset but i dont want highscore reset
// document.querySelector(".btn-new").addEventListener("click", function () {
//   location.reload();
// });
