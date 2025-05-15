document.addEventListener("DOMContentLoaded", () => {
  const birthdayModal = document.getElementById("birthdayModal");
  const enquiryModal = document.getElementById("enquiryModal");
  const modals = [birthdayModal, enquiryModal];
  const toggleBtn = document.querySelector(".menu-toggle");
  const navbarMenu = document.getElementById("navbarMenu");

  // Toggle Menu
  toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
    toggleBtn.setAttribute("aria-expanded", navbarMenu.classList.contains("show"));
  });

  // Open Modal
  window.openModal = (id) => {
    document.getElementById(id).style.display = "block";
  };

  // Close Modals on outside click
  window.addEventListener("click", (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // Close Modals on button click
  document.querySelectorAll(".close-button").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });

    // Allow keyboard close
    btn.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        btn.click();
      }
    });
  });

  // Show Birthday Modal on May 16
  const today = new Date();
  const isBirthday = today.getDate() === 16 && today.getMonth() === 4;
  const shownThisYear = localStorage.getItem("birthdayYear") === today.getFullYear().toString();

  if (isBirthday && !shownThisYear) {
    birthdayModal.style.display = "block";
    localStorage.setItem("birthdayYear", today.getFullYear());
  }

  // Only one video plays at a time
  const videos = document.querySelectorAll("video");
  videos.forEach(video => {
    video.addEventListener("play", () => {
      videos.forEach(other => {
        if (other !== video && !other.paused) {
          other.pause();
        }
      });
    });
  });
});
