import type { PartyMember } from '../data/content';

/** Escape a string for safe interpolation into HTML/attributes. */
export function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Ornamental hairline divider with a centered diamond. */
export function divider(): string {
  return '<div class="divider" aria-hidden="true"><span></span></div>';
}

/** Slender, subtle cross motif for the faith section. */
export function crossMotif(): string {
  return `<svg class="cross-motif" viewBox="0 0 40 64" aria-hidden="true" focusable="false">
      <path d="M20 3 V61 M8 21 H32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    </svg>`;
}

/** Render an image, or an elegant gradient placeholder when no src is set. */
export function media(src: string | undefined, alt: string, tone = 0): string {
  if (src) {
    return `<img class="media__img" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" />`;
  }
  return `<div class="media__ph media__ph--${tone % 5}" role="img" aria-label="${esc(alt)}">
      <span class="media__ph-mark">T&amp;S</span>
    </div>`;
}

/** Two-letter initials from a person's name. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0] ? parts[0].charAt(0) : '';
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
  return (first + last).toUpperCase();
}

/** Circular avatar — photo if provided, otherwise elegant initials. */
export function avatar(member: PartyMember): string {
  if (member.src) {
    return `<span class="avatar"><img src="${esc(member.src)}" alt="${esc(member.name)}" loading="lazy" decoding="async" /></span>`;
  }
  return `<span class="avatar avatar--ph" aria-hidden="true">${esc(initials(member.name))}</span>`;
}
