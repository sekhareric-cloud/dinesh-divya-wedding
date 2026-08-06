import type { WeddingContent } from '../data/content';
import { divider, esc, media } from './partials';

export function renderGallery(content: WeddingContent): string {
  const { gallery } = content;

  const items = gallery.items
    .map(
      (item, i) => `<figure class="gallery__item reveal" style="--reveal-delay: ${(i % 3) * 0.08}s">
        <button
          class="gallery__btn"
          type="button"
          data-lightbox
          data-src="${esc(item.src ?? '')}"
          data-caption="${esc(item.caption)}"
          data-alt="${esc(item.alt)}"
          aria-label="View photo: ${esc(item.caption)}"
        >
          ${media(item.src, item.alt, i)}
          <figcaption class="gallery__cap">${esc(item.caption)}</figcaption>
        </button>
      </figure>`,
    )
    .join('');

  return `<section class="section gallery" id="gallery">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(gallery.eyebrow)}</span>
          <h2 class="section-title">${esc(gallery.title)}</h2>
          ${divider()}
        </header>
        <div class="gallery__grid">${items}</div>
      </div>
    </section>`;
}
