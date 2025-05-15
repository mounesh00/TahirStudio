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

// 🎉 Open birthday modal automatically ONLY on May 16
function checkBirthday() {
  const today = new Date();
  if (today.getMonth() === 4 && today.getDate() === 16) { // May = 4
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

window.onload = checkBirthday;
