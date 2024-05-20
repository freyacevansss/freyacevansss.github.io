const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPaueImg);

playPaueButton.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
  if (myVideo.paused || myVideo.ended) {
    playPaueImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.play();
  } else {
    playPaueImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "blue";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "red";
    myVideo.muted = true;
  }
}
