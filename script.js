document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.nav-toggle');
const navigation = document.getElementById('main-navigation');
const mobileLayout = window.matchMedia('(max-width: 760px)');
header.classList.add('menu-ready');

function setMenuOpen(open) {
  header.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobileLayout.matches) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header.classList.contains('menu-open')) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!header.contains(event.target)) setMenuOpen(false);
});

header.addEventListener('focusout', (event) => {
  if (!header.contains(event.relatedTarget)) setMenuOpen(false);
});

mobileLayout.addEventListener('change', () => setMenuOpen(false));
