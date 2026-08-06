import type { WeddingContent } from '../data/content';
import { divider, esc, media } from './partials';

export function renderStory(content: WeddingContent): string {
  const { story } = content;

  const chapters = story.chapters
    .map(
      (chapter, i) => `<article class="story__chapter reveal">
        <div class="story__media">${media(chapter.src, `${chapter.title} — ${chapter.date}`, i)}</div>
        <div class="story__text">
          <span class="story__date">${esc(chapter.date)}</span>
          <h3 class="story__title">${esc(chapter.title)}</h3>
          <p>${esc(chapter.body)}</p>
        </div>
      </article>`,
    )
    .join('');

  return `<section class="section story" id="story">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(story.eyebrow)}</span>
          <h2 class="section-title">${esc(story.title)}</h2>
          ${divider()}
        </header>
        <div class="story__chapters">${chapters}</div>
      </div>
    </section>`;
}
