document.addEventListener("DOMContentLoaded", () => {
  console.log("Tahir.Studio site loaded!");

  // Smooth scrolling
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
