// Open enquiry modal
function openModal() {
  const modal = document.getElementById('enquiryModal');
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
}

// Close both modals (enquiry and birthday)
function closeModal() {
  ['enquiryModal', 'birthdayModal'].forEach(id => {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });
}

// Toggle Navbar menu for small screens with ARIA
function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  const btn = document.querySelector('.menu-toggle');
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    menu.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('show');
    btn.setAttribute('aria-expanded', 'true');
  }
}

// 🎉 Open birthday modal automatically ONLY on May 16
function checkBirthday() {
  const today = new Date();
  if (today.getDate() === 16 && today.getMonth() === 4) { // May = 4 (zero-based)
    const modal = document.getElementById('birthdayModal');
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
  }
}

// Close modals when clicking outside modal content
window.onclick = function(event) {
  const enquiryModal = document.getElementById('enquiryModal');
  const birthdayModal = document.getElementById('birthdayModal');

  if (event.target === enquiryModal) {
    enquiryModal.style.display = 'none';
    enquiryModal.setAttribute('aria-hidden', 'true');
  }
  if (event.target === birthdayModal) {
    birthdayModal.style.display = 'none';
    birthdayModal.setAttribute('aria-hidden', 'true');
  }
}

// Pause all videos except the one playing
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

// Run birthday check on page load
window.onload = checkBirthday;
