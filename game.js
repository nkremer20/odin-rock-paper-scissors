const choiceButtons = document.querySelectorAll('button');
const humanChoice = document.querySelector('#human-choice');
const computerChoice = document.querySelector('#computer-choice');
const humanScoreNum = document.querySelector('#human-score');
const computerScoreNum = document.querySelector('#computer-score');

let humanScore = 0;
let computerScore = 0;

function getComputerSelection() {
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
    return rpc;
};

function checkWinner(human, computer) {
    computerChoicelower = computer.toLowerCase();

    switch (human) {
        case 'rock':
            if (computerChoicelower === 'paper') {
                computerScoreNum.textContent = ++computerScore;
            } else if (computerChoicelower === 'scissors') {
                humanScoreNum.textContent = ++humanScore;
            };
            break;

        case 'paper':
            if (computerChoicelower === 'scissors') {
                computerScoreNum.textContent = ++computerScore;
            } else if (computerChoicelower === 'rock') {
                humanScoreNum.textContent = ++humanScore;
            };
            break;
        
        case 'scissors':
            if (computerChoicelower === 'rock') {
                computerScoreNum.textContent = ++computerScore;
            } else if (computerChoicelower === 'paper') {
                humanScoreNum.textContent = ++humanScore;
            }
        default: 
            return;
    }
};

function winnerDisplay(message) {
    const scoreboard = document.querySelector('.scoreboard');
    

    while (scoreboard.lastElementChild) {
        scoreboard.removeChild(scoreboard.lastElementChild);
    }
}

choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = button.id;

        const computerSelection = getComputerSelection();

        humanChoice.textContent = humanSelection.toUpperCase();
        computerChoice.textContent = computerSelection.toUpperCase();

        checkWinner(humanSelection, computerSelection);

        if (humanScore === 5) {
            winnerDisplay('You Won!');
        } else if (computerScore === 5) {
            winnerDisplay('Computer Won!');
        }
    })
});