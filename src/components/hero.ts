import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

export function renderHero(content: WeddingContent): string {
  const { couple, date, location, hero } = content;

  const countdownUnit = (key: string, label: string) => `<div class="countdown__unit">
      <span class="countdown__num" data-cd="${key}">--</span>
      <span class="countdown__label">${label}</span>
    </div>`;

  return `<div class="cinematic-intro" data-intro>
      <div class="cinematic-intro__glow" aria-hidden="true"></div>
      <div class="cinematic-intro__inner">
        <p class="cinematic-intro__eyebrow">A Christ-centered celebration</p>
        <div class="cinematic-intro__names">
          <span>${esc(couple.partnerA)}</span>
          <em>&amp;</em>
          <span>${esc(couple.partnerB)}</span>
        </div>
        <p class="cinematic-intro__date">04 · 09 · 2026</p>
        <p class="cinematic-intro__verse">“Marriage is honourable in all.”</p>
        <p class="cinematic-intro__ref">Hebrews 13:4</p>
        <button class="cinematic-intro__enter" type="button" data-intro-enter>
          <span>Enter Our Wedding</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
    <section class="hero" id="top">
      <div class="hero__bg" aria-hidden="true">
        <img class="hero__bg-img" src="${esc(hero.image)}" alt="" decoding="async" />
      </div>
      <div class="hero__overlay" aria-hidden="true"></div>

      <div class="hero__content container">
        <p class="hero__eyebrow">${esc(hero.eyebrow)}</p>

        <h1 class="hero__names">
          <span class="hero__name">${esc(couple.partnerA)}</span>
          <span class="hero__amp">&amp;</span>
          <span class="hero__name">${esc(couple.partnerB)}</span>
        </h1>

        <p class="hero__intro">${esc(hero.intro)}</p>
        ${divider()}

        <p class="hero__meta">${esc(date.displayLong)}</p>
        <p class="hero__meta hero__meta--place">${esc(location.venue)} · ${esc(location.city)}</p>

        <div class="countdown" id="countdown" aria-label="Countdown to the wedding day" aria-live="polite">
          ${countdownUnit('days', 'Days')}
          <span class="countdown__sep" aria-hidden="true">·</span>
          ${countdownUnit('hours', 'Hours')}
          <span class="countdown__sep" aria-hidden="true">·</span>
          ${countdownUnit('minutes', 'Minutes')}
          <span class="countdown__sep" aria-hidden="true">·</span>
          ${countdownUnit('seconds', 'Seconds')}
        </div>

        <a class="hero__cue" href="#schedule">
          <span>${esc(hero.scrollCue)}</span>
          <span class="hero__cue-line" aria-hidden="true"></span>
        </a>
      </div>
    </section>`;
}
