/** Cinematic invitation opening. */
export function initIntro(): void {
  const intro = document.querySelector<HTMLElement>('[data-intro]');
  const enter = document.querySelector<HTMLButtonElement>('[data-intro-enter]');
  if (!intro || !enter) return;

  document.body.classList.add('intro-locked');

  const close = (): void => {
    intro.classList.add('is-closing');
    document.body.classList.remove('intro-locked');
    window.setTimeout(() => intro.remove(), 900);
  };

  enter.addEventListener('click', close);
}
