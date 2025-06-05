// Scroll animations
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) el.classList.add("visible");
  });
});

// Sound on hover
const hoverSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387"); // You can change the URL

document.querySelectorAll(".card, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    hoverSound.play();
  });
});

// Toggle theme
const themeBtn = document.getElementById("theme-toggle");
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
