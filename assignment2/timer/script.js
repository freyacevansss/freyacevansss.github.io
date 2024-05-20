// Utilised 'Bro Code' video: https://www.youtube.com/watch?v=8Nsb9cjmOVA as a guide to
// follow for java script, applying it to my own alterations.

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused - false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {
  if (paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}

// Play/Pause section for the ambient sound
const ambientSound = document.querySelector("#ambient-sound");
console.log(ambientSound);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playAmbientsound);

function playAmbientsound() {
  if (ambientSound.paused || ambientSound.ended) {
    playPauseImg.src = "play.png";
    ambientSound.play();
  } else {
    playPauseImg.src = "pause.png";
    ambientSound.pause();
  }
}
