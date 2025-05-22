const computerScoreD = document.querySelector("#Computer");
const humanScoreD =  document.querySelector("#human");
const button = document.querySelectorAll(".rock, .paper, .scissors");
const display1 = document.querySelector("#Summary1");
const display2 = document.querySelector("#Summary2");

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


