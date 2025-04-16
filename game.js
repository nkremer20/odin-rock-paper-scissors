const choiceButtons = document.querySelectorAll('button');
const humanChoice = document.querySelector('#human-choice');
const computerChoice = document.querySelector('#computer-choice');

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

choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = button.id;

        const computerSelection = getComputerSelection();

        console.log(`Human Choice: ${humanSelection} | Computer Choice: ${computerSelection}`)


    })
});