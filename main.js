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

  // Smooth scrolling for nav links
  document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 🎂 Birthday Modal - show on May 16
  const now = new Date();
  const isBirthday = now.getDate() === 16 && now.getMonth() === 4; // May = 4 (0-indexed)

  if (isBirthday) {
    const modal = document.getElementById("birthdayModal");
    if (modal) {
      modal.style.display = "block";
    }
  }
});
