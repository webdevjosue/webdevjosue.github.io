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
    // Here you can add your own form submission logic
    // For now, we'll just show an alert
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });

  // Show the initial card (About)
  showCard("about");
});

// Function to decode base64 encoded email
function decodeEmail(encodedEmail) {
  return atob(encodedEmail);
}

// Function to deobfuscate and display the email
function deobfuscateEmail() {
  const emailSpan = document.getElementById("obfuscated-email");
  const encodedEmail = emailSpan.getAttribute("data-email");
  const decodedEmail = decodeEmail(encodedEmail);
  emailSpan.textContent = decodedEmail;
  emailSpan.setAttribute("href", `mailto:${decodedEmail}`);
  emailSpan.removeAttribute("onclick");
}
