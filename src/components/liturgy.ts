import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

export function renderLiturgy(content: WeddingContent): string {
  const { liturgy } = content;

  const items = liturgy.order
    .map(
      (item, i) => `<li class="liturgy__item reveal" style="--reveal-delay: ${(i % 4) * 0.06}s">
        <span class="liturgy__num">${String(i + 1).padStart(2, '0')}</span>
        <div class="liturgy__body">
          <h3 class="liturgy__title">${esc(item.title)}</h3>
          <p>${esc(item.detail)}</p>
        </div>
      </li>`,
    )
    .join('');

  return `<section class="section liturgy" id="liturgy" aria-label="Order of service">
      <div class="container container--narrow">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(liturgy.eyebrow)}</span>
          <h2 class="section-title">${esc(liturgy.title)}</h2>
          ${divider()}
          <p>${esc(liturgy.note)}</p>
        </header>
        <ol class="liturgy__list">${items}</ol>
      </div>
    </section>`;
}
