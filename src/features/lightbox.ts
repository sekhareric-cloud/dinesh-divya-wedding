interface Slide {
  src: string;
  caption: string;
  alt: string;
}

/** Accessible gallery lightbox with keyboard navigation. */
export function initLightbox(): void {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-lightbox]'));
  if (!buttons.length) return;

  const slides: Slide[] = buttons.map((btn) => ({
    src: btn.dataset.src ?? '',
    caption: btn.dataset.caption ?? '',
    alt: btn.dataset.alt ?? '',
  }));

  let index = 0;
  let lastFocused: HTMLElement | null = null;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Photo viewer');
  overlay.innerHTML = `
      <button class="lightbox__close" type="button" aria-label="Close viewer">&times;</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous photo">&#8249;</button>
      <div class="lightbox__stage">
        <div class="lightbox__media-wrap"></div>
        <p class="lightbox__cap"></p>
      </div>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next photo">&#8250;</button>
    `;
  document.body.appendChild(overlay);

  const mediaWrap = overlay.querySelector<HTMLElement>('.lightbox__media-wrap');
  const caption = overlay.querySelector<HTMLElement>('.lightbox__cap');
  const closeBtn = overlay.querySelector<HTMLButtonElement>('.lightbox__close');
  const prevBtn = overlay.querySelector<HTMLButtonElement>('.lightbox__nav--prev');
  const nextBtn = overlay.querySelector<HTMLButtonElement>('.lightbox__nav--next');
  if (!mediaWrap || !caption || !closeBtn || !prevBtn || !nextBtn) return;

  const render = (): void => {
    const slide = slides[index];
    if (slide.src) {
      const img = document.createElement('img');
      img.className = 'lightbox__media';
      img.src = slide.src;
      img.alt = slide.alt;
      mediaWrap.replaceChildren(img);
    } else {
      const ph = document.createElement('div');
      ph.className = `lightbox__ph media__ph media__ph--${index % 5}`;
      const mark = document.createElement('span');
      mark.className = 'media__ph-mark';
      mark.textContent = 'T&S';
      ph.appendChild(mark);
      mediaWrap.replaceChildren(ph);
    }
    caption.textContent = slide.caption;
  };

  const open = (i: number): void => {
    index = i;
    lastFocused = document.activeElement as HTMLElement | null;
    render();
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const close = (): void => {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    lastFocused?.focus();
  };

  const go = (direction: number): void => {
    index = (index + direction + slides.length) % slides.length;
    render();
  };

  buttons.forEach((btn, i) => btn.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
  });
}
