import type { WeddingContent } from '../data/content';
import { esc } from './partials';

export function renderFooter(content: WeddingContent): string {
  const { couple, date, location, footer } = content;
  const initials = `${couple.partnerA.charAt(0)}&amp;${couple.partnerB.charAt(0)}`;

  return `<footer class="footer">
      <div class="container footer__inner">
        <span class="footer__monogram" aria-hidden="true">${initials}</span>
        <p class="footer__names">${esc(couple.partnerA)} &amp; ${esc(couple.partnerB)}</p>
        <p class="footer__date">${esc(date.displayShort)} · ${esc(location.city)}</p>
        <p class="footer__verse">${esc(footer.verse)}</p>
        <p class="footer__hash">${esc(couple.hashtag)}</p>
        <a class="footer__top" href="#top">Back to top &uarr;</a>
        <p class="footer__made">${esc(footer.message)}</p>
      </div>
    </footer>`;
}
