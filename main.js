// Toggle Navbar
function toggleMenu() {
  const menu = document.getElementById("navbarMenu");
  menu.classList.toggle("show");
}

// Modal controls
function closeModal() {
  document.getElementById("birthdayModal").style.display = "none";
}

function openEnquiryModal() {
  document.getElementById("enquiryModal").style.display = "block";
}

function closeEnquiryModal() {
  document.getElementById("enquiryModal").style.display = "none";
}

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your enquiry! We'll get back to you soon.");
  closeEnquiryModal();
});

// Smooth Scroll + Birthday Check
document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll("nav a");
  anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const today = new Date();
  if (today.getDate() === 16 && today.getMonth() === 4 && today.getFullYear() === 2025) {
    document.getElementById("birthdayModal").style.display = "block";
  }
});
