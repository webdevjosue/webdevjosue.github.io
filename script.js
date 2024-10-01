document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const navButtons = document.querySelectorAll(".nav-btn");

  function showCard(cardId) {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });
    document.getElementById(cardId).classList.add("active");
    document.querySelector(`[data-target="${cardId}"]`).classList.add("active");
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      showCard(target);
    });
  });

  // Handle form submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console
    console.log("Form submitted");
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });

  // Show the initial card (About)
  showCard("about");
});
