// computerPlay function, where rock, paper, or scissors will be chosen at random
let computerSelection = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    let randomChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return randomChoice;
}
// playerSelection function, where players inputs rock, paper, or scissors (case insensitive)
function playerSelection(input) { 
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerchoice.toLowerCase();
    if (playerChoice === "rock") {
        return "Rock";
    }
    else if (playerChoice === "paper") {
        return "Paper";
    }
    else if (playerChoice === "scissors" ) {
        return "Scissors";
    }
}
// round() function
function playRound(playerSelection(), computerPlay()) {
    
}

// game() function, where playerSelection and computerPlay inputs are taken, returns a win, lose, or draw
function game(playerSelection, computerPlay) {
    let playerScore = 0;
    let computerScore = 0; 
    if //("Rock", "Rock") || ("Paper", "Paper") || ("Scissors", "Scissors"), draw, add 0 to both player and computer scores
    if // ("Rock", "Scissors") || ("Scissors", "Paper") || ("Paper", "Rock"), win for player, add 1 to player score
    if // ("Rock", "Paper") || ("Paper", "Scissors") || ("Scissors", "Rock"), lose for players, add 1 to computer score
}
// after each game, run function game again
// loop function, until either player score or computer score = 5
// at game completion, declare Player winner if player score = 5
// declare Computer winner if computer score = 5
// Ask "Play again?" If yes, run function game, and make sure scores reset to 0,0