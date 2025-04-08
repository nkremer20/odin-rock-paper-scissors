function getComputerChoice() {
    const random_choice = Math.floor((Math.random() * 3) + 1);
    let rpc = ""

    switch(random_choice) {
        case 1:
            rpc = "Rock";
            break;
        case 2:
            rpc = "Paper";
            break;
        case 3:
            rpc = "Scissors";
            break;
    }
    console.log(rpc);
    return rpc;
};

function getHumanChoice() {
    choice = prompt("Type Rock, Paper or, Scissors");
    console.log(choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Make choices lower case, so the values are case insensitive
    const humanChoiceLower = humanChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();

    switch(humanChoiceLower) {
        case "rock":
            if (computerChoiceLower === "paper") {
                ++computerScore;
                console.log("You lost! Paper beats Rock");
            } else if (computerChoiceLower === "scissors") {
                ++humanScore;
                console.log("You won! Rock beats Scissors");
            } else {
                console.log("Tie!")
            };
            break;

        case "paper":
            if (computerChoiceLower === "scissors") {
                ++computerScore;
                console.log("You lost! Scissors beats Paper");
            } else if (computerChoiceLower === "rock") {
                ++humanScore;
                console.log("You won! Paper beats Rock");
            } else {
                console.log("Tie!")
            };
            break;

        case "scissors":
            if (computerChoiceLower === "rock") {
                ++computerScore;
                console.log("You lost! Rock beats Scissors");
            } else if (computerChoiceLower === "paper") {
                ++humanScore;
                console.log("You won! Scissors beats Paper");
            } else {
                console.log("Tie!")
            };
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);