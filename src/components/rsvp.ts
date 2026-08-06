import type { WeddingContent } from '../data/content';
import { divider, esc } from './partials';

/**
 * RSVP is intentionally a styled, non-functional placeholder for now.
 * To make it live later (e.g. Formspree): add `action="https://formspree.io/f/XXXX"`
 * and `method="POST"` to the <form>, then remove the `disabled` attribute on the
 * submit button and the `data-rsvp-lock` guard.
 */
export function renderRsvp(content: WeddingContent): string {
  const { rsvp } = content;

  return `<section class="section section--ink rsvp" id="rsvp">
      <div class="container container--narrow rsvp__inner reveal">
        <span class="eyebrow">${esc(rsvp.eyebrow)}</span>
        <h2 class="section-title">${esc(rsvp.title)}</h2>
        ${divider()}
        <p class="rsvp__msg">${esc(rsvp.message)}</p>

        <form class="rsvp__form" data-rsvp-lock aria-describedby="rsvp-note">
          <div class="rsvp__row">
            <label class="field">
              <span class="field__label">Full name</span>
              <input type="text" name="name" autocomplete="name" placeholder="Your name" disabled />
            </label>
            <label class="field">
              <span class="field__label">Email</span>
              <input type="email" name="email" autocomplete="email" placeholder="you@example.com" disabled />
            </label>
          </div>

          <fieldset class="rsvp__attend">
            <legend class="field__label">Will you celebrate with us?</legend>
            <label class="choice"><input type="radio" name="attending" value="yes" disabled /> Joyfully accept</label>
            <label class="choice"><input type="radio" name="attending" value="no" disabled /> Regretfully decline</label>
          </fieldset>

          <button class="btn btn--solid rsvp__submit" type="submit" disabled>RSVP opening soon</button>
        </form>

        <p class="rsvp__note" id="rsvp-note">
          ${esc(rsvp.deadline)}<br />
          Call or WhatsApp:
          ${rsvp.phones
            .map(
              (phone) =>
                `<a class="rsvp__mail" href="tel:${esc(phone.replace(/\s+/g, ''))}">${esc(phone)}</a>`,
            )
            .join(' · ')}
        </p>
      </div>
    </section>`;
}
