// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "green";

    // Reset form fields
    form.reset();
  });
});
