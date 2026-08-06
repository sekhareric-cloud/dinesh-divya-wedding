(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const f="Chavas Grand A/C Kalyana Mandapam",b="Govt. Hospital Road, Tenali, Guntur District, Andhra Pradesh",p={couple:{partnerA:"Dinesh",partnerB:"Divya",hashtag:"#DineshAndDivya"},date:{iso:"2026-09-04T10:00:00",displayLong:"Friday, 4 September 2026",displayShort:"4 September 2026"},location:{venue:f,city:"Tenali, Guntur District, Andhra Pradesh"},nav:[{label:"Home",href:"#top"},{label:"Family",href:"#family"},{label:"Celebration",href:"#schedule"},{label:"Venue",href:"#venue"},{label:"Gallery",href:"#gallery"}],hero:{eyebrow:"By the grace of God",intro:"are getting married",scrollCue:"Scroll to celebrate with us",image:"/images/dinesh-divya-hero.jpg"},verse:{text:"Marriage is honourable in all.",reference:"Hebrews 13:4",blessing:"With thankful hearts and the blessings of our beloved parents, we invite you to celebrate the beginning of Dinesh and Divya’s life together."},family:{eyebrow:"Two families, one joy",title:"With Our Families",intro:"With gratitude to God and with the love and blessings of our parents, we invite you to share in this special day.",members:[{role:"The Groom",name:"Dinesh",parents:"Son of Sri G. V. Subbarao & Smt. Santhakumari"},{role:"The Bride",name:"Divya",parents:"Daughter of Sri Koduru Parasuram & Smt. Sunitha"}]},schedule:{eyebrow:"The day",title:"The Celebration",intro:"We would be honoured to have you with us as we celebrate this joyful beginning.",day:[{time:"10:00 AM",title:"Wedding Ceremony",description:"Join us as Dinesh and Divya enter into the holy sacrament of matrimony."},{time:"12:30 PM",title:"Reception & Lunch",description:"Celebrate with us and share a meal together following the wedding."}]},venue:{eyebrow:"Where",title:"Wedding & Reception",ceremony:{name:f,time:"Wedding Ceremony · 10:00 AM",address:b,mapEmbedUrl:"https://www.google.com/maps?q=Chavas%20Grand%20A%2FC%20Kalyana%20Mandapam%2C%20Tenali%2C%20Andhra%20Pradesh&output=embed"},reception:{name:f,time:"Reception & Lunch · 12:30 PM onwards",address:b,mapEmbedUrl:"https://www.google.com/maps?q=Chavas%20Grand%20A%2FC%20Kalyana%20Mandapam%2C%20Tenali%2C%20Andhra%20Pradesh&output=embed"},directions:"The wedding, reception, and lunch will all be held at Chavas Grand A/C Kalyana Mandapam on Govt. Hospital Road, Tenali."},gallery:{eyebrow:"Moments",title:"Dinesh & Divya",items:[{src:"/images/dinesh-divya-hero.jpg",alt:"Dinesh and Divya together",caption:"Together with gratitude"},{src:"/images/dinesh-divya-portrait.jpg",alt:"Dinesh and Divya standing together",caption:"A beautiful beginning"},{src:"/images/dinesh-divya-couple.jpg",alt:"Dinesh and Divya holding hands",caption:"Hand in hand"},{src:"/images/dinesh-divya-family-1.jpg",alt:"Dinesh and Divya with family",caption:"Blessed by family"},{src:"/images/dinesh-divya-family-2.jpg",alt:"Dinesh and Divya with loved ones",caption:"Surrounded by love"}]},footer:{message:"Made with love, and with gratitude to God.",verse:"“The Lord has made everything beautiful in His time.” — Ecclesiastes 3:11"}};function t(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function m(){return'<div class="divider" aria-hidden="true"><span></span></div>'}function L(){return`<svg class="cross-motif" viewBox="0 0 40 64" aria-hidden="true" focusable="false">
      <path d="M20 3 V61 M8 21 H32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    </svg>`}function S(s,e,r=0){return s?`<img class="media__img" src="${t(s)}" alt="${t(e)}" loading="lazy" decoding="async" />`:`<div class="media__ph media__ph--${r%5}" role="img" aria-label="${t(e)}">
      <span class="media__ph-mark">T&amp;S</span>
    </div>`}function A(s){const{couple:e,nav:r}=s,n=`${e.partnerA.charAt(0)}&amp;${e.partnerB.charAt(0)}`,a=r.map(l=>`<li><a href="${t(l.href)}" data-nav-link>${t(l.label)}</a></li>`).join("");return`<header class="nav" id="site-nav" data-nav>
      <div class="nav__inner container">
        <a class="nav__brand" href="#top" aria-label="${t(e.partnerA)} and ${t(e.partnerB)} — top of page">
          <span class="nav__monogram">${n}</span>
        </a>
        <div class="nav__actions">
          <button class="mute-btn" type="button"
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
    </button>
          <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Open menu" data-nav-toggle>
            <span></span><span></span><span></span>
          </button>
        </div>
        <nav class="nav__menu" id="nav-menu" aria-label="Primary">
          <ul>${a}</ul>
        </nav>
      </div>
    </header>`}function x(s){const{couple:e,date:r,location:n,hero:a}=s,i=(l,o)=>`<div class="countdown__unit">
      <span class="countdown__num" data-cd="${l}">--</span>
      <span class="countdown__label">${o}</span>
    </div>`;return`<div class="cinematic-intro" data-intro>
      <div class="cinematic-intro__glow" aria-hidden="true"></div>
      <div class="cinematic-intro__inner">
        <p class="cinematic-intro__eyebrow">A Christ-centered celebration</p>
        <div class="cinematic-intro__names">
          <span>${t(e.partnerA)}</span>
          <em>&amp;</em>
          <span>${t(e.partnerB)}</span>
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
        <img class="hero__bg-img" src="${t(a.image)}" alt="" decoding="async" />
      </div>
      <div class="hero__overlay" aria-hidden="true"></div>

      <div class="hero__content container">
        <p class="hero__eyebrow">${t(a.eyebrow)}</p>

        <h1 class="hero__names">
          <span class="hero__name">${t(e.partnerA)}</span>
          <span class="hero__amp">&amp;</span>
          <span class="hero__name">${t(e.partnerB)}</span>
        </h1>

        <p class="hero__intro">${t(a.intro)}</p>
        ${m()}

        <p class="hero__meta">${t(r.displayLong)}</p>
        <p class="hero__meta hero__meta--place">${t(n.venue)} · ${t(n.city)}</p>

        <div class="countdown" id="countdown" aria-label="Countdown to the wedding day" aria-live="polite">
          ${i("days","Days")}
          <span class="countdown__sep" aria-hidden="true">·</span>
          ${i("hours","Hours")}
          <span class="countdown__sep" aria-hidden="true">·</span>
          ${i("minutes","Minutes")}
          <span class="countdown__sep" aria-hidden="true">·</span>
          ${i("seconds","Seconds")}
        </div>

        <a class="hero__cue" href="#schedule">
          <span>${t(a.scrollCue)}</span>
          <span class="hero__cue-line" aria-hidden="true"></span>
        </a>
      </div>
    </section>`}function C(s){const{verse:e}=s;return`<section class="section scripture" id="scripture" aria-label="Scripture">
      <div class="container container--narrow scripture__inner reveal">
        <span class="scripture__cross">${L()}</span>
        <blockquote class="scripture__verse">${t(e.text)}</blockquote>
        <cite class="scripture__ref">${t(e.reference)}</cite>
        <p class="scripture__blessing">${t(e.blessing)}</p>
      </div>
    </section>`}function M(s){const{family:e}=s,r=e.members.map(n=>`<article class="family__card reveal">
        <span class="family__role">${t(n.role)}</span>
        <h3 class="family__name">${t(n.name)}</h3>
        <p class="family__parents">${t(n.parents)}</p>
        ${n.note?`<p class="family__note">${t(n.note)}</p>`:""}
        ${n.lineage?`<p class="family__lineage">${t(n.lineage)}</p>`:""}
      </article>`).join('<span class="family__amp" aria-hidden="true">&amp;</span>');return`<section class="section section--cream family" id="family" aria-label="Our families">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${t(e.eyebrow)}</span>
          <h2 class="section-title">${t(e.title)}</h2>
          ${m()}
          <p>${t(e.intro)}</p>
        </header>
        <div class="family__grid">${r}</div>
      </div>
    </section>`}function E(s){const{schedule:e}=s,r=e.day.map((n,a)=>`<li class="timeline__item reveal" style="--reveal-delay: ${a*.08}s">
        <span class="timeline__time">${t(n.time)}</span>
        <span class="timeline__dot" aria-hidden="true"></span>
        <div class="timeline__body">
          <h3 class="timeline__title">${t(n.title)}</h3>
          <p>${t(n.description)}</p>
        </div>
      </li>`).join("");return`<section class="section section--cream schedule" id="schedule">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${t(e.eyebrow)}</span>
          <h2 class="section-title">${t(e.title)}</h2>
          ${m()}
          <p>${t(e.intro)}</p>
        </header>
        <ol class="timeline">${r}</ol>
      </div>
    </section>`}function k(s){const{gallery:e}=s,r=e.items.map((n,a)=>`<figure class="gallery__item reveal" style="--reveal-delay: ${a%3*.08}s">
        <button
          class="gallery__btn"
          type="button"
          data-lightbox
          data-src="${t(n.src??"")}"
          data-caption="${t(n.caption)}"
          data-alt="${t(n.alt)}"
          aria-label="View photo: ${t(n.caption)}"
        >
          ${S(n.src,n.alt,a)}
          <figcaption class="gallery__cap">${t(n.caption)}</figcaption>
        </button>
      </figure>`).join("");return`<section class="section gallery" id="gallery">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${t(e.eyebrow)}</span>
          <h2 class="section-title">${t(e.title)}</h2>
          ${m()}
        </header>
        <div class="gallery__grid">${r}</div>
      </div>
    </section>`}function D(s){const{venue:e}=s;return`<section class="section section--cream venue" id="venue">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">${t(e.eyebrow)}</span>
          <h2 class="section-title">${t(e.title)}</h2>
          ${m()}
        </header>

        <div class="venue__grid">
          <div class="venue__info reveal">
            <article class="venue__card">
              <h3 class="venue__name">${t(e.ceremony.name)}</h3>
              <p class="venue__time">${t(e.ceremony.time)}</p>
              <p class="venue__addr">${t(e.ceremony.address)}</p>
            </article>
            <article class="venue__card">
              <h3 class="venue__name">${t(e.reception.name)}</h3>
              <p class="venue__time">${t(e.reception.time)}</p>
              <p class="venue__addr">${t(e.reception.address)}</p>
            </article>
            <p class="venue__directions">${t(e.directions)}</p>
          </div>

          <div class="venue__maps reveal">
            <figure class="venue__map">
              <iframe
                src="${t(e.ceremony.mapEmbedUrl)}"
                title="Map to ${t(e.ceremony.name)}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <figcaption class="venue__map-label">${t(e.ceremony.name)}</figcaption>
            </figure>
            <figure class="venue__map">
              <iframe
                src="${t(e.reception.mapEmbedUrl)}"
                title="Map to ${t(e.reception.name)}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <figcaption class="venue__map-label">${t(e.reception.name)}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>`}function q(s){const{couple:e,date:r,location:n,footer:a}=s;return`<footer class="footer">
      <div class="container footer__inner">
        <span class="footer__monogram" aria-hidden="true">${`${e.partnerA.charAt(0)}&amp;${e.partnerB.charAt(0)}`}</span>
        <p class="footer__names">${t(e.partnerA)} &amp; ${t(e.partnerB)}</p>
        <p class="footer__date">${t(r.displayShort)} · ${t(n.city)}</p>
        <p class="footer__verse">${t(a.verse)}</p>
        <p class="footer__hash">${t(e.hashtag)}</p>
        <a class="footer__top" href="#top">Back to top &uarr;</a>
        <p class="footer__made">${t(a.message)}</p>
      </div>
    </footer>`}function B(){const s=document.querySelector("[data-nav]");if(!s)return;const e=s.querySelector("[data-nav-toggle]"),r=s.querySelectorAll("[data-nav-link]");let n=window.scrollY;const a=()=>{const o=window.scrollY;s.classList.toggle("is-scrolled",o>40),o>80&&!s.classList.contains("is-open")?s.classList.toggle("is-hidden",o>n):s.classList.remove("is-hidden"),n=o};a(),window.addEventListener("scroll",a,{passive:!0});const i=()=>{s.classList.remove("is-open"),e?.setAttribute("aria-expanded","false"),e?.setAttribute("aria-label","Open menu"),document.body.style.overflow=""},l=()=>{s.classList.add("is-open"),e?.setAttribute("aria-expanded","true"),e?.setAttribute("aria-label","Close menu"),document.body.style.overflow="hidden"};e?.addEventListener("click",()=>{s.classList.contains("is-open")?i():l()}),r.forEach(o=>o.addEventListener("click",i)),document.addEventListener("keydown",o=>{o.key==="Escape"&&i()})}function T(s){const e=document.getElementById("countdown");if(!e)return;const r=new Date(s).getTime(),n={days:e.querySelector('[data-cd="days"]'),hours:e.querySelector('[data-cd="hours"]'),minutes:e.querySelector('[data-cd="minutes"]'),seconds:e.querySelector('[data-cd="seconds"]')},a=o=>String(o).padStart(2,"0"),i=()=>{const o=r-Date.now();return o<=0?(e.classList.add("countdown--done"),e.textContent="Today we become one — to God be the glory!",!0):(n.days&&(n.days.textContent=String(Math.floor(o/864e5))),n.hours&&(n.hours.textContent=a(Math.floor(o/36e5%24))),n.minutes&&(n.minutes.textContent=a(Math.floor(o/6e4%60))),n.seconds&&(n.seconds.textContent=a(Math.floor(o/1e3%60))),!1)};if(i())return;const l=window.setInterval(()=>{i()&&window.clearInterval(l)},1e3)}function G(){const s=Array.from(document.querySelectorAll(".reveal"));if(!s.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){s.forEach(n=>n.classList.add("is-visible"));return}const r=new IntersectionObserver((n,a)=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),a.unobserve(i.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});s.forEach(n=>r.observe(n))}function H(){const s=Array.from(document.querySelectorAll("[data-lightbox]"));if(!s.length)return;const e=s.map(c=>({src:c.dataset.src??"",caption:c.dataset.caption??"",alt:c.dataset.alt??""}));let r=0,n=null;const a=document.createElement("div");a.className="lightbox",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label","Photo viewer"),a.innerHTML=`
      <button class="lightbox__close" type="button" aria-label="Close viewer">&times;</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous photo">&#8249;</button>
      <div class="lightbox__stage">
        <div class="lightbox__media-wrap"></div>
        <p class="lightbox__cap"></p>
      </div>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next photo">&#8250;</button>
    `,document.body.appendChild(a);const i=a.querySelector(".lightbox__media-wrap"),l=a.querySelector(".lightbox__cap"),o=a.querySelector(".lightbox__close"),u=a.querySelector(".lightbox__nav--prev"),g=a.querySelector(".lightbox__nav--next");if(!i||!l||!o||!u||!g)return;const y=()=>{const c=e[r];if(c.src){const d=document.createElement("img");d.className="lightbox__media",d.src=c.src,d.alt=c.alt,i.replaceChildren(d)}else{const d=document.createElement("div");d.className=`lightbox__ph media__ph media__ph--${r%5}`;const _=document.createElement("span");_.className="media__ph-mark",_.textContent="T&S",d.appendChild(_),i.replaceChildren(d)}l.textContent=c.caption},$=c=>{r=c,n=document.activeElement,y(),a.classList.add("is-open"),document.body.style.overflow="hidden",o.focus()},v=()=>{a.classList.remove("is-open"),document.body.style.overflow="",n?.focus()},h=c=>{r=(r+c+e.length)%e.length,y()};s.forEach((c,d)=>c.addEventListener("click",()=>$(d))),o.addEventListener("click",v),u.addEventListener("click",()=>h(-1)),g.addEventListener("click",()=>h(1)),a.addEventListener("click",c=>{c.target===a&&v()}),document.addEventListener("keydown",c=>{a.classList.contains("is-open")&&(c.key==="Escape"?v():c.key==="ArrowLeft"?h(-1):c.key==="ArrowRight"&&h(1))})}function P(){const s=document.querySelector("[data-mute-btn]");if(!s)return;const e=new Audio("/audio/canon.mp3");e.loop=!0,e.preload="auto",e.volume=.5,e.muted=!1;let r=!1;const n=()=>{s.setAttribute("data-muted",String(e.muted)),s.setAttribute("aria-label",e.muted?"Unmute music":"Mute music")},a=()=>{r=!0,e.play().then(n).catch(()=>{r=!1})},i=u=>u.target instanceof Element&&!!u.target.closest("[data-mute-btn]"),l=u=>{r||i(u)||a()};["pointerdown","keydown","touchstart","scroll"].forEach(u=>window.addEventListener(u,l,{passive:!0})),s.addEventListener("click",()=>{r?e.muted=!e.muted:a(),n()}),n()}function j(){const s=document.querySelector("[data-intro]"),e=document.querySelector("[data-intro-enter]");if(!s||!e)return;document.body.classList.add("intro-locked");const r=()=>{s.classList.add("is-closing"),document.body.classList.remove("intro-locked"),window.setTimeout(()=>s.remove(),900)};e.addEventListener("click",r)}const w=document.querySelector("#app");w&&(w.innerHTML=[A(p),'<main id="main">',x(p),C(p),M(p),E(p),k(p),D(p),"</main>",q(p)].join(""),B(),T(p.date.iso),G(),H(),P(),j());
