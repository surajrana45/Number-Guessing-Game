'use strict';
/*console.log(document.querySelector('.message').textCotent);
document.querySelector('.message').textCotent = 'correct';

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
let highscore = 0;
let secret = Math.trunc(Math.random() * 20) + 1;

function mani() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secret) {
    document.querySelector('.message').textContent = '😍 correct number';
    document.querySelector('.number').textContent = secret;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secret) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret ? 'TOO HIGH' : 'TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST!!';
    }
  }
}

document.querySelector('.check').addEventListener('click', mani);

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
});
