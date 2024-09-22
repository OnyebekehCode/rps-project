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
//I called the function to increment the variable scores immediately because
//i didn't find any other way i could call it without getting errors so i used
// it and also printing to the screen whether the computer or the player won
    if (humanChoice == ("Rock")) {
        if (computerChoice == ("Scissors")) {
            addHumScores();
            console.log("You win Rock crushes Scissors")
        }else if (computerChoice == ("Paper")) {
            addComScores();
            console.log("Computer win Paper Covers Rock")
        }else (console.log("draw"))
        
    }else if (humanChoice == ("Paper")) {
        if (computerChoice == ("Scissors")) {
            addComScores();
            console.log("Computer win Scissors cuts Paper");
        }else if (computerChoice == ("Rock")) {
            addHumScores();
            console.log("You win Paper Covers Rock");
        }else console.log("draw");
    }else (humanChoice == ("Scissors")); {
        if (computerChoice == ("Paper")) {
            addHumScores();
            console.log("You win Scissors cuts Paper");
        }else if (computerChoice == ("Rock")) {
            addComScores();
            console.log("Computer win Rock crushes Scissors");
        }else {(console.log("draw"))
    }
    }
}

const humanSelection = getHumanChoice();
const computerSelecton = getComputerChoice();
// checks who won by counting the addition to the score value
//the idea behind it is that since anyone with addition get larger in numeric value
//potential flaws is when both draw or both wins successively
/*function checkScore() {
    if (computerScore > humanScore) {
    console.log("Computer wins")
}else if (humanScore > computerScore) {
    console.log("you win")
}else {
    console.log("tiedonscores")
}
} */
playRound(humanSelection, computerSelecton);
//checkScore();



//checks and confirms who wins after five rounds
/* if (computerScore >= 5) {
    alert("Computer gets the crown")
}else if (humanScore >= 5) {
    alert("You're the Winner")
}else {
    console.log("Play on")
} */
//unfortunately this last code blocks containing if statements does not work
//I can't pnpoint why either

};

playGame();
playGame();
playGame();
playGame();
playGame();