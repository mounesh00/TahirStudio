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
});
