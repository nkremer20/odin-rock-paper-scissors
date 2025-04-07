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
    
    return rpc;
};

function getHumanChoice() {
    choice = prompt("Type Rock, Paper or, Scissors");
    return choice;
}

const computerChoice = getComputerChoice();

const humanChoice = getHumanChoice();
