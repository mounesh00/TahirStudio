// Navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Modal open/close
const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('enquiryModal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent link navigation
  modal.style.display = 'block';
  // Hide menu on modal open (optional)
  navbarMenu.classList.remove('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if clicking outside modal-content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Show birthday wish only on May 16
function checkBirthday() {
  const today = new Date();
  const birthdayWish = document.getElementById('birthday-wish');

  // Month is zero-indexed: 4 = May, day = 16
  if (today.getMonth() === 4 && today.getDate() === 16) {
    birthdayWish.style.display = 'block';
  } else {
    birthdayWish.style.display = 'none';
  }
}

checkBirthday();
