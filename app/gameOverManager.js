let lives = 10;
const livesElement = document.querySelector('#lives');

startLives();

function createLiveTemplate(liveNumber) {
  return `<i class="fa-solid fa-heart life" data-live=${liveNumber}></i>`;
}

function startLives() {
  for(i = 0; i < lives; i++) {
    livesElement.innerHTML += createLiveTemplate(i);
  }
}

function lostLive() {
  lives--;
  const liveElement = document.querySelector(`[data-live='${lives}']`);
  liveElement.classList.remove('fa-solid');
  liveElement.classList.add('fa-regular');
  
  if(lives <= 0) {
    gameOver();
  }
}

function gameOver() {
  document.body.classList.add('game-over');
  document.body.innerHTML = `
    <h2>Game Over!</h2>
    <h3>The secret number was ${secretNumber}.</h3>

    <button id="play-again" class="btn-play">Play Again!</button>
  `;
}
