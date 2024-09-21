console.log("Hello World")


//create getComputerChoice function
//set the function to return a random of three strings Rock Paper or scissors
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3 + 1);
    if  (computerChoice <= 1) {
        computerChoice = ("Rock");
    }else if (computerChoice <= 2) {
        computerChoice = ("Paper");
    }else if (computerChoice <= 3){
        computerChoice = ("scissors");
    }else {
        computerChoice = ("game malfunctioned")
    };
    return computerChoice
};

//create getHumanChoice function
//set to collect input of one of three strings Rock Paper Scissors
function getHumanChoice() {
    let humanChoice = prompt("write either Rock, Paper or Scissors");
    if (humanChoice.toLowerCase() === "rock") {
        humanChoice = ("Rock");
    }else if (humanChoice.toLowerCase() === "paper"){
        humanChoice = ("Paper")
    }else if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = ("Scissors")
    } else humanChoice = prompt("input the correct word");
    return humanChoice;
};



//create a function playRound
//set the function to compare user input and computer value and decide winner
//create function playGame
//set function to make game end at the 5th round
function playGame() {
//create Variable named humanScore and computerScore
//initialise variable to 0
let computerScore = 0;
let humanScore = 0;
// add to the variable computerScore if computer wins
function addComScores(){
    return computerScore += 1
}
//add to the variable humanScore if human wins
function addHumScores() {
    return humanScore += 1
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice == ("Rock")) {
        if (computerChoice == ("Scissors")) {
//I called the function to increment the variable scores immediately because
//i didn't find any other way i could call it without getting errors so i used
// it here instead of printing to the screen whether the computer or the player won
            addHumScores()
        }else if (computerChoice == ("Paper")) {
            addComScores()
        }else (console.log("draw"))
    }else if (humanChoice == ("Paper")) {
        if (computerChoice == ("Scissors")) {
            addComScores()
        }else if (computerChoice == ("Rock")) {
            addHumScores()
        }else console.log("draw")
    }else if (humanChoice == ("Scissors")) {
        if (computerChoice == ("Paper")) {
            addHumScores()
        }else if (computerChoice == ("Rock")) {
            addComScores()
        }else (console.log("draw"))
    }else (console.log("game malfunctioned"))
}
const humanSelection = getHumanChoice();
const computerSelecton = getComputerChoice();

playRound(humanSelection, computerSelecton);
// checks who has the most points therefore who is leading as the game is progresing
if (computerScore > humanScore) {
    console.log("Computer wins")
}else if (humanScore > computerScore) {
    console.log("you win")
}else {
    console.log("")
}


//checks and confirms who wins after five rounds
if (computerScore >= 5) {
    alert("Computer gets the crown")
}else if (humanScore >= 5) {
    alert("You're the Winner")
}else {
    console.log("Play on")
}

};

playGame();
playGame();
playGame();
playGame();
playGame();


