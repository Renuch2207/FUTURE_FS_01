// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}
