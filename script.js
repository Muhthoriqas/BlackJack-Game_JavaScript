let BlackJack;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let notStart = true;

let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let messageGameOver = document.getElementById("gameOver");

let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");

let startAgain = document.getElementById("start");
let player = {
  playerName: "Your",
  Money: 100,
};
let playerMoney = document.getElementById("playerMoney");

function nameP() {
  let name = document.getElementById("nama").value;
  if (name !== "") {
    let yourName = document.getElementById("yourName");
    yourName.textContent = "WELCOME " + name + " TO BLACKJACK GAME!";
    document.getElementById("nama").value = "";

    alert("Your Name is " + name);
  } else {
    alert("Input Your Name!");
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  notStart = false;
  playerMoney.innerText = player.playerName + " Money: Rp." + player.Money;

  startAgain.textContent = "WANT TO PLAY AGAIN?";

  gameBegin();
}
function gameBegin() {
  cardEl.textContent = "YourCards: ";
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum:" + sum;
  if (sum <= 20) {
    message = "Draw new Card?";
  } else if (sum === 21) {
    message = "Yo Got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You Lose!";
    isAlive = false;
  }
  messageEl.textContent = message;
  messageGameOver.textContent = "";
}

function newCard() {
  if (notStart === true) {
    messageGameOver.textContent = "Please Start Game First!";
  } else if (isAlive === true) {
    if (hasBlackJack === false) {
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      gameBegin();
    } else {
      startAgain.textContent = "WANT TO PLAY AGAIN ?";
      messageGameOver.textContent = "You Already Got BlackJack!!";
    }
  } else {
    startAgain.textContent = "WANT TO PLAY AGAIN ?";
    messageGameOver.textContent = "Game is Over You Can't Take New Card!!";
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(1 + Math.random() * 13);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
