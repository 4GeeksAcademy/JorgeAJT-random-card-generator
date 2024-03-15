/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const generateRandomCard = () => {
    let suit = ["♠", "♥", "♣", "♦"];
    let numberCard = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "Q",
      "K"
    ];

    const generateRandomArrayValue = array => {
      return array[Math.floor(Math.random() * array.length)];
    };

    const cardNumberElement = document.getElementById("numberInCard");
    cardNumberElement.innerHTML = generateRandomArrayValue(numberCard);

    let randomSuit = generateRandomArrayValue(suit);
    const color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
    const cardSuitElement = document.querySelectorAll(".suitInCard");
    cardSuitElement.forEach(suit => {
      suit.style.color = color;
      suit.innerHTML = randomSuit;
    });
  };
  generateRandomCard();

  const randomCardButton = document.getElementById("randomCardButton");
  randomCardButton.addEventListener("click", generateRandomCard);

  setInterval(checkFunction, 5000);
  function checkFunction() {
    let check = document.getElementById("flexCheck");
    if (check.checked === true) generateRandomCard();
  }
};
