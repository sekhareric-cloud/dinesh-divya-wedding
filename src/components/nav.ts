import type { WeddingContent } from '../data/content';
import { esc } from './partials';

export function renderNav(content: WeddingContent): string {
  const { couple, nav } = content;
  const initials = `${couple.partnerA.charAt(0)}&amp;${couple.partnerB.charAt(0)}`;

  const links = nav
    .map((link) => `<li><a href="${esc(link.href)}" data-nav-link>${esc(link.label)}</a></li>`)
    .join('');

  const muteBtn = `<button class="mute-btn" type="button"
      data-mute-btn
      data-muted="false"
      aria-label="Mute music"
      title="Toggle music">
      <svg class="mute-btn__icon mute-btn__icon--on" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        <path d="M19 12c0-3.53-2.04-6.58-5-8.05v2.15c1.91 1.27 3 3.37 3 5.9s-1.09 4.63-3 5.9v2.15c2.96-1.47 5-4.52 5-8.05z"/>
      </svg>
      <svg class="mute-btn__icon mute-btn__icon--off" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
      </svg>
    </button>`;

  return `<header class="nav" id="site-nav" data-nav>
      <div class="nav__inner container">
        <a class="nav__brand" href="#top" aria-label="${esc(couple.partnerA)} and ${esc(couple.partnerB)} — top of page">
          <span class="nav__monogram">${initials}</span>
        </a>
        <div class="nav__actions">
          ${muteBtn}
          <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Open menu" data-nav-toggle>
            <span></span><span></span><span></span>
          </button>
        </div>
        <nav class="nav__menu" id="nav-menu" aria-label="Primary">
          <ul>${links}</ul>
        </nav>
      </div>
    </header>`;
}
