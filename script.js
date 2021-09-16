'use strict';

let score = 20;
let highscore = 0;
const randomVariable = function () {
  let secret = Math.trunc(Math.random() * 20) + 1;
  return secret;
};
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNumber = randomVariable();
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomVariable();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //document.querySelector('.message').textContent = 'Start guessing...';
  //document.querySelector('.number').textContent = '?';
  displayMsg('Start guessing...');
  displayMsg('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = ' ';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMsg('No Number!');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMsg('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('You have lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
