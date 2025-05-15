// Navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navbarMenu.classList.toggle('show');
});

// Modal open/close
const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('enquiryModal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default link behavior
  modal.style.display = 'block';
  navbarMenu.classList.remove('show');
  menuToggle.setAttribute('aria-expanded', 'false');
  closeModalBtn.focus();
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  openModalBtn.focus();
});

// Close modal if clicking outside modal-content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    openModalBtn.focus();
  }
});

// Close modal on Escape key press
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
    openModalBtn.focus();
  }
});

// Show birthday wish only on May 16
function checkBirthday() {
  const today = new Date();
  const birthdayWish = document.getElementById('birthday-wish');

  if (today.getMonth() === 4 && today.getDate() === 16) {
    birthdayWish.style.display = 'block';
  } else {
    birthdayWish.style.display = 'none';
  }
}

checkBirthday();
