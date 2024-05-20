// play/pause video section

const fractalArt = document.querySelector("#fractal-art");
console.log(fractalArt);
const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);
const playPauseImg = document.querySelector("#play-pause-img");

playPauseBtn.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
  if (fractalArt.paused || fractalArt.ended) {
    fractalArt.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    fractalArt.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
// ------------------------------------------------------------------------------

// Mute/Unmute section

const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);

muteUnmuteBtn.addEventListener("click", toggleSound);

// in the function section I changed the style of the background colour so that when the video sound is muted the icon and icon colour changes

function toggleSound() {
  if (fractalArt.muted) {
    muteUnmuteBtn.style.backgroundColor = "crimson";
    fractalArt.muted = false;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    muteUnmuteBtn.style.backgroundColor = "blue";
    fractalArt.muted = true;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }
}
// -------------------------------------------------------------------------------------
