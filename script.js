document.querySelector(".menu-btn").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  const menuBtn = document.querySelector(".menu-btn");
  const hero = document.querySelector(".hero");

  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");

  // Add or remove padding-top class based on menu state
  if (navLinks.classList.contains("active")) {
    hero.classList.add("padding-top");
  } else {
    hero.classList.remove("padding-top");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  // Function to update the slider
  function updateSlider() {
    cards.forEach((card, index) => {
      card.classList.remove("active", "next", "prev");
      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add("next");
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add("prev");
      }
    });
  }

  // Initial setup
  updateSlider();

  // Automatic sliding every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
  }, 3000);
});

// Back to Top Button Functionality
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show button after scrolling 300px
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll to top
  });
});

// FAQ Accordion Functionality
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqAnswer = button.nextElementSibling;
    const isActive = faqAnswer.classList.contains("active");

    // Close all other answers
    document.querySelectorAll(".faq-answer").forEach((answer) => {
      answer.classList.remove("active");
      answer.style.maxHeight = null;
    });
    document.querySelectorAll(".faq-question").forEach((q) => {
      q.classList.remove("active");
    });

    // Toggle the clicked answer
    if (!isActive) {
      faqAnswer.classList.add("active");
      button.classList.add("active");
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
  });
});
