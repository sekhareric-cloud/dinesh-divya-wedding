import type { PartyMember, WeddingContent } from '../data/content';
import { avatar, divider, esc } from './partials';

function memberCard(member: PartyMember, i: number): string {
  return `<li class="member reveal" style="--reveal-delay: ${(i % 4) * 0.06}s">
      ${avatar(member)}
      <div class="member__info">
        <h4 class="member__name">${esc(member.name)}</h4>
        <span class="member__role">${esc(member.role)}</span>
        <span class="member__rel">${esc(member.relation)}</span>
      </div>
    </li>`;
}

export function renderParty(content: WeddingContent): string {
  const { party } = content;

  const bridesmaids = party.bridesmaids.map(memberCard).join('');
  const groomsmen = party.groomsmen.map(memberCard).join('');

  return `<section class="section section--cream party" id="party">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${esc(party.eyebrow)}</span>
          <h2 class="section-title">${esc(party.title)}</h2>
          ${divider()}
          <p>${esc(party.intro)}</p>
        </header>

        <div class="party__officiant reveal">
          ${avatar(party.officiant)}
          <div class="member__info">
            <h4 class="member__name">${esc(party.officiant.name)}</h4>
            <span class="member__role">${esc(party.officiant.role)}</span>
            <span class="member__rel">${esc(party.officiant.relation)}</span>
          </div>
        </div>

        <div class="party__columns">
          <div class="party__col">
            <h3 class="party__heading reveal">Bridesmaids</h3>
            <ul class="party__list">${bridesmaids}</ul>
          </div>
          <div class="party__col">
            <h3 class="party__heading reveal">Groomsmen</h3>
            <ul class="party__list">${groomsmen}</ul>
          </div>
        </div>
      </div>
    </section>`;
}
