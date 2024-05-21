function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {return "rock"}
    if (number == 1) {return "paper"}
    if (number == 2) {return "scissors"}
}

function getHumanChoice() {
    let promptChoice = prompt("rock, paper, or scissors?")
    if (promptChoice.toLowerCase() == "rock") {return "rock"}
    if (promptChoice.toLowerCase() == "paper") {return "paper"}
    if (promptChoice.toLowerCase() == "scissors") {return "scissors"}
}

function playGame() {
let humanScore = 0
let computerScore = 0
for (let i = 0; i < 5; i++) {
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice)}
function playRound(humanChoice, computerChoice) {
if (humanChoice == "rock" && computerChoice == "paper"){
console.log("you lose!"),
computerScore++}
if (humanChoice == "rock" && computerChoice == "scissors"){
console.log("you win!"),
humanScore++}
if (humanChoice == "rock" && computerChoice == "rock"){
console.log("it's a tie!")}
if (humanChoice == "paper" && computerChoice == "rock"){
console.log("you win!"),
humanScore++}
if (humanChoice == "paper" && computerChoice == "paper"){
console.log("it's a tie!")}
if (humanChoice == "paper" && computerChoice == "scissors"){
console.log("you lose!"),
computerScore++}
if (humanChoice == "scissors" && computerChoice == "rock"){
console.log("you win!"),
humanScore++}
if (humanChoice == "scissors" && computerChoice == "paper"){
console.log("you lose!"),
computerScore++}
if (humanChoice == "scissors" && computerChoice == "scissors"){
console.log("it's a tie!")}
}
console.log(humanScore, computerScore)
}



playGame();
