import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

export function renderVenue(content: WeddingContent): string {
  const { venue } = content;

  return `
<section id="venue" class="section section--venue">
  <div class="container">

    <div class="section__heading reveal">
      <p class="eyebrow">${esc(venue.eyebrow)}</p>
      <h2>${esc(venue.title)}</h2>
      ${divider()}
    </div>

    <div class="venue__grid">

      <div class="venue__info reveal">

        <article class="venue__card">
          <h3 class="venue__name">${esc(venue.ceremony.name)}</h3>
          <p class="venue__time">${esc(venue.ceremony.time)}</p>
          <p class="venue__time">${esc(venue.reception.time)}</p>
        </article>

      </div>

      <div class="venue__maps reveal">

        <figure class="venue__map">
          <iframe
            src="${esc(venue.ceremony.mapEmbedUrl)}"
            title="Map to ${esc(venue.ceremony.name)}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <figcaption class="venue__map-label">
            ${esc(venue.ceremony.name)}
          </figcaption>
        </figure>

      </div>

    </div>
  </div>
</section>`;
}