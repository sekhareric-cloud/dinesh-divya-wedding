/** Sticky-nav condensing, scroll-hide, mobile menu toggle, and menu auto-close. */
export function initNav(): void {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  const toggle = nav.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const links = nav.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');

  let lastY = window.scrollY;

  const setScrolled = (): void => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    // Hide nav when scrolling down, reveal when scrolling up or near top.
    // Never hide while the mobile menu is open.
    if (y > 80 && !nav.classList.contains('is-open')) {
      nav.classList.toggle('is-hidden', y > lastY);
    } else {
      nav.classList.remove('is-hidden');
    }
    lastY = y;
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  const closeMenu = (): void => {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  };
  const openMenu = (): void => {
    nav.classList.add('is-open');
    toggle?.setAttribute('aria-expanded', 'true');
    toggle?.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  };

  toggle?.addEventListener('click', () => {
    if (nav.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  links.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}
