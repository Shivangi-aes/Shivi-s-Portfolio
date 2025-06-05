// Add a sound effect
const clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-29.mp3');
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.play();
  });
});

// Light/Dark mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Theme';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '10px 20px';
toggleBtn.style.borderRadius = '10px';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Confetti welcome animation
window.onload = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
};

// Scroll reveal
const revealElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-more');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.9;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
