// script for balto
const video = document.querySelector(".video-container video");
const hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("mouseenter", () => {
  video.play();
  hoverText.classList.remove("active");
});

video.addEventListener("mouseleave", () => {
  video.pause();
  hoverText.classList.add("active");
});

// scipt for cooper
const video2 = document.querySelector(".video-container-2 video");
const hoverText2 = document.querySelector(".video-container-2 .hover-text-2");

video2.addEventListener("mouseenter", () => {
  video2.play();
  hoverText2.classList.remove("active");
});

video2.addEventListener("mouseleave", () => {
  video2.pause();
  hoverText2.classList.add("active");
});

// script for nessie
const video3 = document.querySelector(".video-container-3 video");
const hoverText3 = document.querySelector(".video-container-3 .hover-text-3");

video3.addEventListener("mouseenter", () => {
  video3.play();
  hoverText3.classList.remove("active");
});

video3.addEventListener("mouseleave", () => {
  video3.pause();
  hoverText3.classList.add("active");
});

// script for kippy
const video4 = document.querySelector(".video-container-4 video");
const hoverText4 = document.querySelector(".video-container-4 .hover-text-4");

video4.addEventListener("mouseenter", () => {
  video4.play();
  hoverText4.classList.remove("active");
});

video4.addEventListener("mouseleave", () => {
  video4.pause();
  hoverText4.classList.add("active");
});

// script for meeko
const video5 = document.querySelector(".video-container-5 video");
const hoverText5 = document.querySelector(".video-container-5 .hover-text-5");

video5.addEventListener("mouseenter", () => {
  video5.play();
  hoverText5.classList.remove("active");
});

video5.addEventListener("mouseleave", () => {
  video5.pause();
  hoverText5.classList.add("active");
});

// script for fluffy
const video6 = document.querySelector(".video-container-6 video");
const hoverText6 = document.querySelector(".video-container-6 .hover-text-6");

video6.addEventListener("mouseenter", () => {
  video6.play();
  hoverText6.classList.remove("active");
});

video6.addEventListener("mouseleave", () => {
  video6.pause();
  hoverText6.classList.add("active");
});
