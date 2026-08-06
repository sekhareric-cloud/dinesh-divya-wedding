import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

export function renderFamilies(content: WeddingContent): string {
  const { family } = content;

  const members = family.members
    .map(
      (m) => `<article class="family__card reveal">
        <span class="family__role">${esc(m.role)}</span>
        <h3 class="family__name">${esc(m.name)}</h3>
        <p class="family__parents">${esc(m.parents)}</p>
        ${m.note ? `<p class="family__note">${esc(m.note)}</p>` : ''}
        ${m.lineage ? `<p class="family__lineage">${esc(m.lineage)}</p>` : ''}
      </article>`,
    )
    .join('<span class="family__amp" aria-hidden="true">&amp;</span>');

  return `<section class="section section--cream family" id="family" aria-label="Our families">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(family.eyebrow)}</span>
          <h2 class="section-title">${esc(family.title)}</h2>
          ${divider()}
          <p>${esc(family.intro)}</p>
        </header>
        <div class="family__grid">${members}</div>
      </div>
    </section>`;
}
