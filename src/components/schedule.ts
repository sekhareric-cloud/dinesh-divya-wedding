import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

export function renderSchedule(content: WeddingContent): string {
  const { schedule } = content;

  const items = schedule.day
    .map(
      (item, i) => `<li class="timeline__item reveal" style="--reveal-delay: ${i * 0.08}s">
        <span class="timeline__time">${esc(item.time)}</span>
        <span class="timeline__dot" aria-hidden="true"></span>
        <div class="timeline__body">
          <h3 class="timeline__title">${esc(item.title)}</h3>
          <p>${esc(item.description)}</p>
        </div>
      </li>`,
    )
    .join('');

  return `<section class="section section--cream schedule" id="schedule">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(schedule.eyebrow)}</span>
          <h2 class="section-title">${esc(schedule.title)}</h2>
          ${divider()}
          <p>${esc(schedule.intro)}</p>
        </header>
        <ol class="timeline">${items}</ol>
      </div>
    </section>`;
}
