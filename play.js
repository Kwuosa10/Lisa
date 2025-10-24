let playerScore = 0;
let computerScore = 0;

let playerDisplay = document.getElementById("player");
let computerDisplay = document.getElementById("computer");
let message = document.getElementById("message");
let compChoiceDisplay = document.getElementById("compChoice");


let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  compChoiceDisplay.textContent = computerSelection;


  if (playerSelection === computerSelection) {
    message.textContent = "It's a tie! You both chose " + playerSelection;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    message.textContent = "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    message.textContent = "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    message.textContent = "You win! Scissors beats Paper";
  } else {
    computerScore++;
    message.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
  }

  playerDisplay.textContent = playerScore;
  computerDisplay.textContent = computerScore;

  checkWinner();
}

function checkWinner() {
  if (playerScore === 5) {
    message.textContent = "You won the game!!!";
    disableButtons();
  } else if (computerScore === 5) {
    message.textContent = "Computer wins the game...";
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

rockBtn.addEventListener("click", function() {
  playRound("rock");
});

paperBtn.addEventListener("click", function() {
  playRound("paper");
});

scissorsBtn.addEventListener("click", function() {
  playRound("scissors");
});


