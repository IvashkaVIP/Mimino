const link = document.querySelectorAll('.header-link');
const url = document.location.pathname;
const CLASS = 'home-nav-link';
link.forEach(x => {
  if (x.classList.contains(CLASS)) {
    x.classList.remove(CLASS);
  }
  if (url.includes(x.getAttribute('href'))) {
    x.classList.add(CLASS);
    return;
  }
});
if (url === '/dream_team/') {
  link[0].classList.add(CLASS);
}
