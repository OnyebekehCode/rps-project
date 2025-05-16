const computer = document.querySelector("#Computer");
const Human =  document.querySelector("#human");
const button = document.querySelectorAll(".rock, .paper, .scissors");
const display = document.querySelector("#ScoreBoard")
const play = document.querySelector("#playButton")
let computerScore = 0;
let humanScore = 0;
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
    if (event.target.className =="rock"|| event.target.className == "paper"|| event.target.className == "scissors") {
        return event.target.className;
    }else event.target.className = alert("input the correct word");
};
let humanChoice = getHumanChoice();
for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(event) {
    humanChoice = getHumanChoice(event);
})};

play.addEventListener("click", function playRound(humanChoice, computerChoice) {

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
        };
    return {computerScore, humanScore}
    });



/*
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
*/