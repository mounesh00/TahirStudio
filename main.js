// Open enquiry modal
function openModal() {
  document.getElementById('enquiryModal').style.display = 'block';
}

// Close both modals (enquiry and birthday)
function closeModal() {
  document.getElementById('enquiryModal').style.display = 'none';
  document.getElementById('birthdayModal').style.display = 'none';
}

// Toggle Navbar menu for small screens
function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('show');
}

// Optional: Open birthday modal automatically on a specific date (example: May 15)
function checkBirthday() {
  const today = new Date();
  if (today.getMonth() === 4 && today.getDate() === 15) { // May is month 4 (0-based)
    document.getElementById('birthdayModal').style.display = 'block';
  }
}

// Close modals when clicking outside modal content
window.onclick = function(event) {
  const enquiryModal = document.getElementById('enquiryModal');
  const birthdayModal = document.getElementById('birthdayModal');

  if (event.target === enquiryModal) {
    enquiryModal.style.display = 'none';
  }
  if (event.target === birthdayModal) {
    birthdayModal.style.display = 'none';
  }
}

// Run birthday check on page load
window.onload = checkBirthday;
