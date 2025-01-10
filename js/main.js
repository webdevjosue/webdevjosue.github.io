document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav-container");
  const heroSection = document.querySelector("#hero");
  const navCheckbox = document.getElementById("nav-toggle");

  // Basic sticky navigation
  const handleScroll = () => {
    if (window.scrollY > heroSection.offsetHeight) {
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

    // Calculate offset based on section
    const offset = targetId === "#contact" ? 0 : 80;

    // Smooth scroll
    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: "smooth",
    });

    // Update URL after scroll completes
    setTimeout(() => {
      window.location.hash = targetId;
    }, 800);
  };

  // Event listeners
  window.addEventListener("scroll", handleScroll);
  document.querySelector(".dropdown").addEventListener("click", handleNavClick);

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      navCheckbox.checked = false;
    }
  });
});
