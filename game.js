
const choices = ['Paper', 'Rock', 'Scissors'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let random_number = getRandomInt(3);
    return choices[random_number];
}

function formatPlayerChoice(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);

    // Get index diff to determine who wins
    const indexDiff = computerIndex - playerIndex;

    if (indexDiff === 1 || indexDiff === -2) {
        return playerSelection + " beats " + computerSelection + ". Player wins!";
    }
    else if (indexDiff === -1 || indexDiff === 2)  {
        return computerSelection + " beats " + playerSelection + ". Player loses!";
    }
    else {
        return playerSelection + " matches " + computerSelection + ". It's a tie!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection;

        // Make sure player enters valid choice
        while(true) {
            playerSelection = prompt("Choose Rock, Paper, or Scissors");
            playerSelection = formatPlayerChoice(playerSelection);
            if (choices.includes(playerSelection)) {
                break;
            }
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();