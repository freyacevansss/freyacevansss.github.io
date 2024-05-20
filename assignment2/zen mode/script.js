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

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

muteUnmuteBtn.addEventListener("click", toggleSound);

// in the function section I changed the style of the background colour so that when the video sound is muted the icon and icon colour changes

function toggleSound() {
  if (fractalArt.muted) {
    muteUnmuteBtn.style.backgroundColor = "crimson";
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    fractalArt.muted = false;
  } else {
    muteUnmuteBtn.style.backgroundColor = "blue";
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    fractalArt.muted = true;
  }
}
// -------------------------------------------------------------------------------------

// this is the code for the full screen section I used site 'She Codes' as a guide to follow

const fullScreenBtn = document.querySelector("#full-screen-btn");
console.log(fullScreenBtn);

document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false
);
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
// ------------------------------------------------------------------------
