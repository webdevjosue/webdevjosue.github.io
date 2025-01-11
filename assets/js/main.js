document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav-container");
  const heroSection = document.querySelector("#hero");
  const navCheckbox = document.getElementById("nav-toggle");

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

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      navCheckbox.checked = false;
      selectButton.classList.add("blinking");
    }
  });

  // Add blinking state management
  const selectButton = document.querySelector(".select-button");

  selectButton.addEventListener("mouseenter", () => {
    selectButton.classList.remove("blinking");
  });

  selectButton.addEventListener("mouseleave", () => {
    if (!navCheckbox.checked) {
      selectButton.classList.add("blinking");
    }
  });

  document.querySelector(".dropdown").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      // Resume blinking after navigation
      setTimeout(() => {
        selectButton.classList.add("blinking");
      }, 100);
    }
  });
});
