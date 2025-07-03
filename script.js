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

// ✅ === Contact Form Submission ===
const form = document.querySelector('.contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  const response = await fetch("https://script.google.com/macros/s/AKfycbzPRj8UnZd5RnSIA_a32rHAB_i6kp7XTujkTKkThj3oQJThnhub7QcFUmQ77tROQCD9/exec", {
    method: "POST",
    body: new FormData(form),
  });

  if (response.ok) {
    alert("Message sent successfully ✅");
    form.reset(); // clear the form
  } else {
    alert("Failed to send message ❌. Please try again.");
  }
});

