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
                alert("You win rock crushes scissors");
                humanScore++
            }else if (computerChoice == "paper") {
                alert("Computer win paper covers rock");
                computerScore++
            }else {alert(" it's a draw");
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                alert("Computer win scissors cuts paper");
                computerScore++
            }else if (computerChoice == "rock") {
                alert("You win paper covers rock");
                humanScore++
            }else {alert("it's a draw");
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                alert("You win scissors cuts paper");
                humanScore++
            }else if (computerChoice == "rock") {
                alert("Computer win rock crushes scissors");
                computerScore++
            }else {(alert("it's a draw"));
            }
            break;
            default:
                alert("............")
    }
    return {computerScore, humanScore}
};
let humanSelection = getHumanChoice();
let computerSelecton = getComputerChoice();

playRound(humanSelection, computerSelecton);
alert(computerScore);
alert(humanScore);

if (computerScore == 3) {
    alert("Computer gets the crown");
}else if (humanScore >= 3) {
    alert("You're the Winner");
}else {
    alert("Play on");
};
};
playGame();
playGame();
playGame();
playGame();
playGame();
playGame();