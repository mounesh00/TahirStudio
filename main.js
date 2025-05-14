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
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");
  };

  // Smooth scrolling
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 🎂 Show Birthday Modal (Simulated)
  const today = new Date(2025, 4, 16); // May 16, 2025
  const isBirthday = today.getDate() === 16 && today.getMonth() === 4;

  if (isBirthday) {
    const modal = document.getElementById("birthdayModal");
    if (modal) {
      modal.style.display = "block";
    }
  }
});
