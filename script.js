function toggleMenu() {
  const menu = document.querySelector('.menuLinks');
  const icon = document.querySelector('.hamIcon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}