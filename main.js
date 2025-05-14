document.addEventListener("DOMContentLoaded", () => {
  console.log("Tahir.Studio site loaded!");

  // Toggle menu on small screens
  window.toggleMenu = function () {
    const menu = document.getElementById("navbarMenu");
    menu.classList.toggle("show");
  };

  // Modal functions
  window.openModal = function () {
    document.getElementById("enquiryModal").style.display = "block";
  };

  window.closeModal = function () {
    document.getElementById("enquiryModal").style.display = "none";
  };

  // Smooth scrolling for anchor links
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Simulate Mutahir's birthday for testing (May 16, 2025)
  window.onload = function () {
    const today = new Date(2025, 4, 16); // May 16, 2025 (Note: Month is 0-indexed, so 4 = May)
    const isBirthday =
      today.getDate() === 16 &&
      today.getMonth() === 4 && // May = 4
      today.getFullYear() === 2025;

    if (isBirthday) {
      document.getElementById("birthdayModal").style.display = "block";
    }
  };
});
