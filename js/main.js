document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav-container");
  const heroSection = document.querySelector("#hero");
  const navOffset = nav.offsetTop;
  const navCheckbox = document.getElementById("nav-toggle");
  const dropdown = document.querySelector(".dropdown");

  // Sticky navigation handling
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 16;
    if (scrollPosition > heroSection.offsetHeight) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });

  // Function to close the menu
  const closeMenu = () => {
    navCheckbox.checked = false;
  };

  // Close menu when clicking links
  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      closeMenu();
    }
  });
});
