import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';

import { content } from './data/content';
import { renderNav } from './components/nav';
import { renderHero } from './components/hero';
import { renderScripture } from './components/scripture';
import { renderFamilies } from './components/families';
import { renderSchedule } from './components/schedule';
import { renderGallery } from './components/gallery';
import { renderVenue } from './components/venue';
import { renderFooter } from './components/footer';

import { initNav } from './features/nav';
import { initCountdown } from './features/countdown';
import { initScrollReveal } from './features/scrollReveal';
import { initLightbox } from './features/lightbox';
import { initAudio } from './features/audio';
import { initIntro } from './features/intro';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = [
    renderNav(content),
    '<main id="main">',
    renderHero(content),
    renderScripture(content),
    renderFamilies(content),
    renderSchedule(content),
    // renderStory(content),
    // renderSchedule(content),
    // renderLiturgy(content),
    renderGallery(content),
    renderVenue(content),
    // renderParty(content),
    // renderTravel(content),
    // renderRsvp(content),
    '</main>',
    renderFooter(content),
  ].join('');

  initNav();
  initCountdown(content.date.iso);
  initScrollReveal();
  initLightbox();
  initAudio();
  initIntro();
}
