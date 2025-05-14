document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Tahir.Studio site loaded!");

  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        console.warn(`⚠️ Section not found: ${targetId}`);
      }
    });
  });
});
