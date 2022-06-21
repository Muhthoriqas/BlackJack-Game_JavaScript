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
  Money: 5000,
};
let playerMoney = document.getElementById("playerMoney");
playerMoney.innerText = player.playerName + " Money: Rp." + player.Money;

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
  let bet = document.getElementById("bet").value;

  if (bet !== "" && player.Money > 0 && player.Money >= bet && bet !== 0) {
    if (bet > 0) {
      let firstCard = getRandomCard();
      let secondCard = getRandomCard();
      cards = [firstCard, secondCard];
      sum = firstCard + secondCard;
      isAlive = true;
      notStart = false;
      player.Money -= bet;
      playerMoney.innerText = player.playerName + " Money: Rp." + player.Money;
      startAgain.textContent = "WANT TO PLAY AGAIN?";
      gameBegin();
    } else {
      alert("Your Bet is 0, Plese Set Your bet > 0!");
    }
  } else if (bet === "") {
    alert("Set Your Bet First!");
  } else if (player.Money === 0) {
    alert("Your Money is = 0, Please Reset Money!");
  } else {
    alert("Your Money is < Bet, Please Reset Money or Change Bet!");
  }
}

function gameBegin() {
  hasBlackJack = false;
  cardEl.textContent = "YourCards: ";
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum:" + sum;
  if (sum === 21) {
    let bet = document.getElementById("bet").value;
    message = "Yo Got BlackJack!";
    hasBlackJack = true;
    player.Money += bet * 6;
    playerMoney.innerText = player.playerName + " Money: Rp." + player.Money;
    document.getElementById("bet").value = "";
  } else if (sum <= 20) {
    message = "Draw new Card?";
  } else {
    message = "You Lose!";
    document.getElementById("bet").value = "";

    isAlive = false;
  }

  messageEl.textContent = message;
  messageGameOver.textContent = "";
}

function newCard() {
  if (notStart === true) {
    messageGameOver.textContent = "Please Start Game First!";
  } else if (isAlive === true) {
    bet = document.getElementById("bet").value;

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
function resetMoney() {
  player.Money = 5000;
  playerMoney.innerText = player.playerName + " Money: Rp." + player.Money;
  if ((player.Money = 5000)) {
    alert("Sucess Reset Money!!");
    messageGameOver.textContent = "";
  } else {
    alert("Failed Reset Money!");
  }
}
