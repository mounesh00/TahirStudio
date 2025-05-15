document.addEventListener("DOMContentLoaded", () => {
  const birthdayModal = document.getElementById("birthdayModal");
  const enquiryModal = document.getElementById("enquiryModal");
  const modals = [birthdayModal, enquiryModal];
  const toggleBtn = document.querySelector(".menu-toggle");
  const navbarMenu = document.getElementById("navbarMenu");

  // 🧭 Toggle Navbar
  toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
    toggleBtn.setAttribute("aria-expanded", navbarMenu.classList.contains("show"));
  });

  // 📦 Open Modal
  window.openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "block";
    }
  };

  // ❌ Close Modals on outside click
  window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // ❌ Close Buttons (with keyboard support)
  document.querySelectorAll(".close-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });

    btn.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        btn.click();
      }
    });
  });

  // 🎉 Show Birthday Modal on May 16
  const today = new Date();
  const isBirthday = today.getDate() === 16 && today.getMonth() === 4; // 4 = May
  const shownThisYear = localStorage.getItem("birthdayYear") === today.getFullYear().toString();

  if (isBirthday && !shownThisYear) {
    birthdayModal.style.display = "block";
  }

  // ⏯️ Only One Video Plays at a Time
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.addEventListener("play", () => {
      videos.forEach((other) => {
        if (other !== video && !other.paused) {
          other.pause();
        }
      });
    });
  });

  // 📩 Booking Form Submission (Formspree)
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(bookingForm);
      const responseDiv = document.getElementById("formMessage");

      try {
        const response = await fetch("https://formspree.io/f/xkgrkadj", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          responseDiv.textContent = "✅ Thank you! Your booking request has been sent.";
          responseDiv.style.color = "green";
          bookingForm.reset();
        } else {
          const data = await response.json();
          responseDiv.textContent = data.error || "❌ Oops! Something went wrong.";
          responseDiv.style.color = "red";
        }
      } catch (error) {
        responseDiv.textContent = "❌ Network error while submitting the form.";
        responseDiv.style.color = "red";
      }
    });
  }
});
