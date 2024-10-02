document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const navButtons = document.querySelectorAll(".nav-btn");
  // Reference to the contact form element for handling form submissions
  const contactForm = document.getElementById("contact-form");
  const emailSpan = document.getElementById("obfuscated-email");

  function showCard(cardId) {
    cards.forEach((card) => card.classList.remove("active"));
    navButtons.forEach((button) => button.classList.remove("active"));
    document.getElementById(cardId).classList.add("active");
    document.querySelector(`[data-target="${cardId}"]`).classList.add("active");
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () =>
      showCard(button.getAttribute("data-target"))
    );
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });

  // Email reveal functionality
  emailSpan.addEventListener("click", function () {
    const encodedEmail = this.getAttribute("data-email");
    const decodedEmail = decodeEmail(encodedEmail);
    this.textContent = decodedEmail;
    this.removeAttribute("data-email");
    this.classList.remove("cursor-pointer", "hover:underline");
    this.classList.add("select-all");

    // Create a mailto link
    const mailtoLink = document.createElement("a");
    mailtoLink.href = `mailto:${decodedEmail}`;
    mailtoLink.textContent = decodedEmail;
    mailtoLink.classList.add("text-primary", "hover:underline");

    // Replace the span with the link
    this.parentNode.replaceChild(mailtoLink, this);
  });

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
