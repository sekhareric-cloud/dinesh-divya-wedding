import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

export function renderTravel(content: WeddingContent): string {
  const { travel } = content;

  const hotels = travel.hotels
    .map(
      (hotel, i) => `<article class="hotel reveal" style="--reveal-delay: ${(i % 3) * 0.08}s">
        <div class="hotel__head">
          <h3 class="hotel__name">${esc(hotel.name)}</h3>
          <span class="hotel__dist">${esc(hotel.distance)}</span>
        </div>
        <p class="hotel__desc">${esc(hotel.description)}</p>
        <a class="hotel__link" href="${esc(hotel.url)}" rel="noopener">Book a room &rarr;</a>
      </article>`,
    )
    .join('');

  const notes = travel.notes
    .map(
      (note, i) => `<div class="note reveal" style="--reveal-delay: ${(i % 4) * 0.06}s">
        <h4 class="note__title">${esc(note.title)}</h4>
        <p>${esc(note.description)}</p>
      </div>`,
    )
    .join('');

  return `<section class="section travel" id="travel">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(travel.eyebrow)}</span>
          <h2 class="section-title">${esc(travel.title)}</h2>
          ${divider()}
          <p>${esc(travel.intro)}</p>
        </header>

        <div class="travel__hotels">${hotels}</div>
        <div class="travel__notes">${notes}</div>
      </div>
    </section>`;
}
