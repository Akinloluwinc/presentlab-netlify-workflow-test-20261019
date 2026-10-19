/* Progressive enhancement only. Content and links work without JavaScript. */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const closeMenu = () => {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
};
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (toggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
  document.querySelectorAll('.nav details[open]').forEach(details => {
    details.open = false;
    details.querySelector('summary').focus();
  });
});
document.addEventListener('click', event => {
  document.querySelectorAll('.nav details[open]').forEach(details => {
    if (!details.contains(event.target)) details.open = false;
  });
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
