document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal");

  function reveal() {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  // Trigger reveal on load + scroll
  reveal();
  window.addEventListener("scroll", reveal);
});

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Get the hamburger menu and close button elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
