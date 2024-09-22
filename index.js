function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3 + 1);
    if  (computerChoice <= 1) {
        computerChoice = ("rock");
    }else if (computerChoice <= 2) {
        computerChoice = ("paper");
    }else if (computerChoice <= 3){
        computerChoice = ("scissors");
    }else {
        computerChoice = (" ");
    };
    return computerChoice
};

function getHumanChoice() {
    let humanChoice = prompt("write either rock, paper or scissors").toLowerCase();
    if (humanChoice =="rock"|| humanChoice == "paper"|| humanChoice == "scissors") {
        return humanChoice;
    }else humanChoice = alert("input the correct word");
};

let computerScore = 0;
let humanScore = 0;

function playGame() {
function playRound(humanChoice, computerChoice) {

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                console.log("You win rock crushes scissors");
                humanScore++
            }else if (computerChoice == "paper") {
                console.log("Computer win paper covers rock");
                computerScore++
            }else {console.log(" it's a draw");
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                console.log("Computer win scissors cuts paper");
                computerScore++
            }else if (computerChoice == "rock") {
                console.log("You win paper covers rock");
                humanScore++
            }else {console.log("it's a draw");
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                console.log("You win scissors cuts paper");
                humanScore++
            }else if (computerChoice == "rock") {
                console.log("Computer win rock crushes scissors");
                computerScore++
            }else {(console.log("it's a draw"));
            }
            break;
            default:
                console.log("............")
    }
    return {computerScore, humanScore}
};
let humanSelection = getHumanChoice();
let computerSelecton = getComputerChoice();

playRound(humanSelection, computerSelecton);
console.log(computerScore);
console.log(humanScore);

if (computerScore == 3) {
    alert("Computer gets the crown");
}else if (humanScore >= 3) {
    alert("You're the Winner");
}else {
    console.log("Play on");
};
};
playGame();
playGame();
playGame();
playGame();
playGame();
playGame();