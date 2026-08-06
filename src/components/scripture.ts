import type { WeddingContent } from '../data/content';
import { crossMotif, esc } from './partials';

export function renderScripture(content: WeddingContent): string {
  const { verse } = content;

  return `<section class="section scripture" id="scripture" aria-label="Scripture">
      <div class="container container--narrow scripture__inner reveal">
        <span class="scripture__cross">${crossMotif()}</span>
        <blockquote class="scripture__verse">${esc(verse.text)}</blockquote>
        <cite class="scripture__ref">${esc(verse.reference)}</cite>
        <p class="scripture__blessing">${esc(verse.blessing)}</p>
      </div>
    </section>`;
}
