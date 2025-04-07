function getComputerChoice() {
    const random_choice = Math.floor((Math.random() * 3) + 1);
    let rpc = ""
    console.log(random_choice);
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
    
    return rpc
};

