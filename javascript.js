console.log("Welcome to Rock, Paper, Scissors!")

// Function to randomly select the computer's choice
function getComputerChoice() {
  if (Math.floor(Math.random() * 3) == 0) {
    return "Rock";
  } else if (Math.floor(Math.random() * 3) == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let computerChoice = getComputerChoice();


// Function to get and validate the human player's choice
function getHumanChoice() {
  let humanChoice = prompt("What's your choice? (Rock, Paper, Scissors)").toLowerCase();
  
  // Validate the human choice input
  while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
    humanChoice = prompt("Invalid choice. Please enter Rock, Paper, or Scissors.").toLowerCase();
  }
  
  // Capitalize the first letter and return the choice
  return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}

let humanScore = 0;
let computerScore = 0;

// Function to play the game
function playGame() {
  // Function to play a single round and update scores
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
      alert("You lose! Paper beats Rock!");
      computerScore++; 
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      alert("You Win! Rock beats Scissors!");
      humanScore++;  
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
      alert("Tie! No winner declared");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      alert("You Win! Paper beats Rock!");
      humanScore++;  
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
      alert("Tie! No winner declared");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      alert("You lose! Scissors beats Paper!");
      computerScore++;  
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      alert("You Lose! Rock beats Scissors!");
      computerScore++;  
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      alert("You Win! Scissors beats Paper!");
      humanScore++;  
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
      alert("Tie! No winner declared");
    }
  }
  
 
  
  // Loop to play 5 rounds
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();  // Get human choice
    let computerSelection = getComputerChoice();  // Get computer choice
    playRound(humanSelection, computerSelection);  // Play a round
  }
  
  // Determine and alert the final winner
  if (computerScore > humanScore) {
    alert(`Computer Wins! Final Score - Computer: ${computerScore} / Human: ${humanScore}`);
  } else {
    alert(`Human Wins! Final Score - Computer: ${computerScore} / Human: ${humanScore}`);
  }
}


playGame();
