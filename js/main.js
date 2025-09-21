document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav-container");
  const heroSection = document.querySelector("#hero");
  const navCheckbox = document.getElementById("nav-toggle");
  const overlay = document.querySelector(".overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll to top function
  window.scrollToTop = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Basic sticky navigation
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > heroSection.offsetHeight) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };

  // Clean navigation to sections
  const handleNavClick = (e) => {
    if (!e.target.matches("a")) return;

    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    // Close menu
    navCheckbox.checked = false;

    // Calculate proper offset including nav height
    const navHeight = nav.offsetHeight;
    const offset = targetId === "#contact" ? navHeight : navHeight + 32;

    // Smooth scroll with adjusted position
    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: "smooth",
    });

    // Update URL without jumping
    window.history.pushState(null, "", targetId);
  };

  // Event listeners
  window.addEventListener("scroll", handleScroll);
  document.querySelector(".dropdown").addEventListener("click", handleNavClick);

  // Close menu when clicking overlay
  overlay.addEventListener("click", function () {
    navCheckbox.checked = false;
  });

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navCheckbox.checked = false;
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      navCheckbox.checked = false;
      // Reset button text when menu closes
      selectButton.textContent = originalText;
    }
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", function () {
    navCheckbox.checked = false;
    // Reset button text when menu closes
    selectButton.textContent = originalText;
  });

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navCheckbox.checked = false;
      // Reset button text when menu closes
      selectButton.textContent = originalText;
    });
  });

  // Simple animation management
  const selectButton = document.querySelector(".select-button");
  const originalText = "Select";
  const activeText = "Menu";

  // Toggle button text based on menu state
  const updateButtonText = () => {
    if (navCheckbox.checked) {
      selectButton.textContent = activeText;
    } else {
      selectButton.textContent = originalText;
    }
  };

  // Listen for checkbox changes to update text
  navCheckbox.addEventListener("change", updateButtonText);

  // Pause animation on hover
  selectButton.addEventListener("mouseenter", () => {
    selectButton.style.animation = 'none';
  });

  selectButton.addEventListener("mouseleave", () => {
    if (!navCheckbox.checked) {
      selectButton.style.animation = '';
    }
  });

  // Resume animation after navigation
  document.querySelector(".dropdown").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      setTimeout(() => {
        selectButton.style.animation = '';
      }, 100);
    }
  });
});
