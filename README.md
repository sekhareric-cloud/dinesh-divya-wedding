# Dinesh & Divya — Wedding Website

A customized version of the original `ts_wedding` Vite + TypeScript wedding template.

## Wedding details

- Couple: Dinesh & Divya
- Date: Friday, 4 September 2026
- Wedding: 10:00 AM
- Venue: Chavas Grand A/C Kalyana Mandapam
- Address: Govt. Hospital Road, Tenali, Guntur District, Andhra Pradesh
- Reception & Lunch: 12:30 PM onwards

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

## Main files to edit

- `src/data/content.ts` — wedding text, dates, venue, gallery, family details
- `src/components/hero.ts` — hero/cinematic opening markup
- `src/styles/sections.css` — page design and cinematic opening styles
- `src/features/intro.ts` — opening animation behavior
- `public/images/` — couple/family photos
- `public/audio/canon.mp3` — background music

## Photos

The project includes optimized web copies of the five uploaded photographs. The original camera RAW file was intentionally not included because browsers do not use `.ARW` directly; convert it to JPEG/WebP if you want to add it later.
