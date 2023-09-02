// JavaScript
const computerChoiceDisplay = document.getElementById('Computer-choice');
const userChoiceDiaplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const ScoreRecorder = document.getElementById('score');
let userChoice;
let computerChoice;
let scorerRecord = 0; // Initialize the score to 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDiaplay.textContent = userChoice;
  generateComputerChoice();
  getResult();
  getScore(); // Update the score after each round
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    computerChoice = 'rock';
  } else if (randomNumber == 2) {
    computerChoice = 'paper';
  } else if (randomNumber == 3) {
    computerChoice = 'scissors';
  }

  computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
  if (computerChoice == userChoice) {
    result = "It's a draw";
  } else if (computerChoice == 'rock' && userChoice == 'paper') {
    result = 'You win';
  } else if (computerChoice == 'rock' && userChoice == 'scissors') {
    result = 'You lose';
  } else if (computerChoice == 'paper' && userChoice == 'rock') {
    result = 'You lose';
  } else if (computerChoice == 'scissors' && userChoice == 'rock') {
    result = 'You win';
  } else if (computerChoice == 'scissors' && userChoice == 'paper') {
    result = 'You lose';
  } else if (computerChoice == 'paper' && userChoice == 'scissors') {
    result = 'You win';
  }
  resultDisplay.textContent = result;
}

function getScore() {
  if (result == 'You win') {
    scorerRecord += 1; // Increment the score when the user wins
  }

  ScoreRecorder.textContent = scorerRecord; // Update the score display
}
