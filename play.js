function playGame() {
  // Step 1: Initialize scores
  let humanScore = 0;
  let computerScore = 0;

  // Step 2: Function to get a random computer choice
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
  }

  // Step 3: Function to get user's choice
  function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
  }

  // Step 4: Function to play one round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
  }

  
  console.log("Round 1:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

  console.log("Round 2:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

  console.log("Round 3:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

  console.log("Round 4:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

  console.log("Round 5:");
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

  // Step 6: Declare the final winner
  console.log("\nFinal Results:");
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}

// Start the game
playGame();


