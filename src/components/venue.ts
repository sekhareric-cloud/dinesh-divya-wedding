import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

export function renderVenue(content: WeddingContent): string {
  const { venue } = content;

  return `<section class="section section--cream venue" id="venue">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(venue.eyebrow)}</span>
          <h2 class="section-title">${esc(venue.title)}</h2>
          ${divider()}
        </header>

        <div class="venue__grid">
          <div class="venue__info reveal">
            <article class="venue__card">
              <h3 class="venue__name">${esc(venue.ceremony.name)}</h3>
              <p class="venue__time">${esc(venue.ceremony.time)}</p>
              <p class="venue__addr">${esc(venue.ceremony.address)}</p>
            </article>
            <article class="venue__card">
              <h3 class="venue__name">${esc(venue.reception.name)}</h3>
              <p class="venue__time">${esc(venue.reception.time)}</p>
              <p class="venue__addr">${esc(venue.reception.address)}</p>
            </article>
            <p class="venue__directions">${esc(venue.directions)}</p>
          </div>

          <div class="venue__maps reveal">
            <figure class="venue__map">
              <iframe
                src="${esc(venue.ceremony.mapEmbedUrl)}"
                title="Map to ${esc(venue.ceremony.name)}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <figcaption class="venue__map-label">${esc(venue.ceremony.name)}</figcaption>
            </figure>
            <figure class="venue__map">
              <iframe
                src="${esc(venue.reception.mapEmbedUrl)}"
                title="Map to ${esc(venue.reception.name)}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <figcaption class="venue__map-label">${esc(venue.reception.name)}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>`;
}
