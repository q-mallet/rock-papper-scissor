function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  }
  return "scissor";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Dang. Tie!");
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    console.log("Winner!");
    return "win";
  } else {
    console.log("Looser...");
    return "loose";
  }
}

function game() {
  let scoreUser = 0;
  let scoreComputer = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissor? ");
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if (result == "loose") {
      scoreComputer++;
    } else if (result == "win") {
      scoreUser++;
    }

    console.log(
      "Your score: " + scoreUser + ". Computer's score: " + scoreComputer + "."
    );
  }

  if (scoreUser > scoreComputer) {
    return "You are the winner!";
  } else if (scoreUser < scoreComputer) {
    return "You are a looser...";
  } else {
    return "Oops.... Tie..";
  }
}

console.log(game());
