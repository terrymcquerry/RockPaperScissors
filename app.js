function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {return "rock"}
    if (number == 1) {return "paper"}
    if (number == 2) {return "scissors"}
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors")
    if (humanChoice.toLowerCase() == "rock") {return "rock"}
    if (humanChoice.toLowerCase() == "paper") {return "paper"}
    if (humanChoice.toLowerCase() == "scissors") {return "scissors"}
}
