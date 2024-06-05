let humanScore = 0
let computerScore = 0
let humanChoice;
let computerChoice;

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playGame();
})
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playGame();
})
const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playGame();
})

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {return "rock"}
    if (number == 1) {return "paper"}
    if (number == 2) {return "scissors"}
}

function playGame() {

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

console.log(humanScore, computerScore)}

