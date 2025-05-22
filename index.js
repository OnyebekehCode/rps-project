<<<<<<< HEAD
const computerScoreD = document.querySelector("#Computer");
const humanScoreD =  document.querySelector("#human");
const button = document.querySelectorAll(".rock, .paper, .scissors");
const display1 = document.querySelector("#Summary1");
const display2 = document.querySelector("#Summary2");
=======
const computer = document.querySelector("#Computer");
const human =  document.querySelector("#human");
const button = document.querySelectorAll(".rock, .paper, .scissors");
const display = document.querySelector("#ScoreBoard")
const play = document.querySelector("#playButton")
let computerScore = 0;
let humanScore = 0;
let humanChoice = ' '
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
button.forEach(button => {
    button.addEventListener("click", (event) => {
        humanChoice = event.target.className;
        human.textContent = `Human chose: ${humanChoice}`;
    })});

play.addEventListener("click", () => {
if (!humanChoice) {
    alert("Please choose rock, paper, or scissors first!");
        return;
}

const computerChoice = getComputerChoice();
computer.textContent = `Computer chose: ${computerChoice}`;

let result = "";
if (humanChoice === computerChoice) {
    result = "It's a draw!";
} else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
) {
    result = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
} else {
    result = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
}

display.textContent = `Human: ${humanScore} | Computer: ${computerScore} | ${result}`;
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
>>>>>>> 4f738cbdfea2cd2daced81786e1ca593254b4c37

let computerScore = 0;
let humanScore = 0;

        for (let i = 0; i < button.length; i++) {
         button[i].addEventListener("click", ()=>{
            let humanChoice = button[i].classList[0];
            let computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);

            computerScoreD.textContent = computerScore;
            humanScoreD.textContent = humanScore;

            if (computerScore >= 5) {
                display2.textContent = "Computer gets the crown";
            }else if (humanScore >= 5) {
                display2.textContent = "You\'re the Winner";
            }else {
                display2.textContent = "Play on";
            };
            })};

    function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()* 3)
      if  (computerChoice === 0) {
        computerChoice = ("rock");
    }else if (computerChoice === 1) {
        computerChoice = ("paper");
    }else if (computerChoice === 2){
        computerChoice = ("scissors");
    }
    return computerChoice;
};


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        display1.textContent = "It\'s a Draw"
            return;
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                display1.textContent = "You win rock crushes scissors";
                humanScore++
            }else if (computerChoice === "paper") {
               display1.textContent = "Computer win paper covers rock";
                computerScore++
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                display1.textContent = "Computer win scissors cuts paper";
                computerScore++
            }else if (computerChoice === "rock") {
                display1.textContent = "You win paper covers rock";
                humanScore++
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                display1.textContent = "You win scissors cuts paper";
                humanScore++
            }else if (computerChoice === "rock") {
                display1.textContent = "Computer win rock crushes scissors";
                computerScore++
            }
            break;
            default:
                display1.textContent = "What\'s the hold?"}

};


<<<<<<< HEAD
=======
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
>>>>>>> 4f738cbdfea2cd2daced81786e1ca593254b4c37
