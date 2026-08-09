/**
 * Dinesh & Divya — wedding website content.
 * All editable wedding information is kept in this file.
 */

export interface NavLink { label: string; href: string; }
export interface StoryChapter { title: string; date: string; body: string; src?: string; }
export interface ScheduleItem { time: string; title: string; description: string; }
export interface LiturgyItem { title: string; detail: string; }
export interface GalleryItem { alt: string; caption: string; src?: string; }
export interface PartyMember { name: string; role: string; relation: string; src?: string; }
export interface Hotel { name: string; description: string; distance: string; url: string; }
export interface TravelNote { title: string; description: string; }
export interface FamilyMember { role: string; name: string; parents: string; note?: string; lineage?: string; }

export interface WeddingContent {
  couple: { partnerA: string; partnerB: string; hashtag: string };
  date: { iso: string; displayLong: string; displayShort: string };
  location: { venue: string; city: string };
  nav: NavLink[];
  hero: { eyebrow: string; intro: string; scrollCue: string; image: string };
  verse: { text: string; reference: string; blessing: string };
  story: { eyebrow: string; title: string; chapters: StoryChapter[] };
  schedule: { eyebrow: string; title: string; intro: string; day: ScheduleItem[] };
  liturgy: { eyebrow: string; title: string; note: string; order: LiturgyItem[] };
  family: { eyebrow: string; title: string; intro: string; members: FamilyMember[] };
  venue: {
    eyebrow: string;
    title: string;
    ceremony: { name: string; time: string; address: string; mapEmbedUrl: string };
    reception: { name: string; time: string; address: string; mapEmbedUrl: string };
    directions: string;
  };
  gallery: { eyebrow: string; title: string; items: GalleryItem[] };
  party: { eyebrow: string; title: string; intro: string; officiant: PartyMember; bridesmaids: PartyMember[]; groomsmen: PartyMember[] };
  travel: { eyebrow: string; title: string; intro: string; hotels: Hotel[]; notes: TravelNote[] };
  rsvp: { eyebrow: string; title: string; message: string; deadline: string; phones: string[] };
  footer: { message: string; verse: string };
}

const venueName = 'Chavas Grand A/C Kalyana Mandapam';
const venueAddress = 'Govt. Hospital Road, Tenali, Guntur District, Andhra Pradesh';

export const content: WeddingContent = {
  couple: {
    partnerA: 'Dinesh',
    partnerB: 'Divya',
    hashtag: '#DineshAndDivya',
  },

  date: {
    iso: '2026-09-04T10:00:00',
    displayLong: 'Friday, 4 September 2026',
    displayShort: '4 September 2026',
  },

  location: {
    venue: venueName,
    city: 'Tenali, Guntur District, Andhra Pradesh',
  },

  nav: [
    { label: 'Home', href: '#top' },
    { label: 'Family', href: '#family' },
    { label: 'Celebration', href: '#schedule' },
    { label: 'Venue', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
  ],

  hero: {
    eyebrow: 'By the grace of God',
    intro: 'are getting married',
    scrollCue: 'Scroll to celebrate with us',
    image: '/images/dinesh-divya-hero.jpg',
  },

  verse: {
    text: 'Marriage is honourable in all.',
    reference: 'Hebrews 13:4',
    blessing: '',
  },

  family: {
    eyebrow: 'Two families, one joy',
    title: 'With Our Families',
    intro: 'With gratitude to God and with the love and blessings of our parents, we invite you to share in this special day.',
    members: [
      {
        role: 'The Groom',
        name: 'Dinesh',
        parents: 'Son of Sri G. V. Subbarao & Smt. Santhakumari',
      },
      {
        role: 'The Bride',
        name: 'Divya',
        parents: 'Daughter of Sri Koduru Parasuram & Smt. Sunitha',
      },
    ],
  },

  story: {
    eyebrow: 'A new beginning',
    title: 'Our Wedding Day',
    chapters: [],
  },

  schedule: {
    eyebrow: 'The day',
    title: 'The Celebration',
    intro: 'We would be honoured to have you with us as we celebrate this joyful beginning.',
    day: [
      {
        time: '10:00 AM',
        title: 'Wedding Ceremony',
        description: 'Join us as Dinesh and Divya enter into the holy sacrament of matrimony.',
      },
      {
        time: '12:30 PM',
        title: 'Reception & Lunch',
        description: 'Celebrate with us and share a meal together following the wedding.',
      },
    ],
  },

  liturgy: {
    eyebrow: 'Christ at the center',
    title: 'A Christ-Centered Marriage',
    note: 'Our prayer is that this marriage will honour God and reflect His grace, faithfulness, and love.',
    order: [
      { title: 'Wedding Ceremony', detail: 'The marriage covenant of Dinesh and Divya.' },
      { title: 'Prayer & Blessing', detail: 'Giving thanks to God and seeking His blessing upon their life together.' },
      { title: 'Celebration', detail: 'Family and friends gather for fellowship, reception, and lunch.' },
    ],
  },

  venue: {
  eyebrow: 'Where',
  title: 'Wedding & Reception',

  ceremony: {
    name: 'Chavas Grand A/C Kalyana Mandapam',
    time: 'Wedding Ceremony · 10:00 AM',
    address: '',
    mapEmbedUrl: 'https://www.google.com/maps?q=Chavas%20Grand%20A%2FC%20Kalyana%20Mandapam%2C%20Tenali%2C%20Andhra%20Pradesh&output=embed',
  },

  reception: {
    name: '',
    time: 'Reception & Lunch · 12:30 PM onwards',
    address: '',
    mapEmbedUrl: '',
  },

  directions: '',
},
  gallery: {
    eyebrow: 'Moments',
    title: 'Dinesh & Divya',
    items: [
      { src: '/images/dinesh-divya-hero.jpg', alt: 'Dinesh and Divya together', caption: 'Together with gratitude' },
      { src: '/images/dinesh-divya-portrait.jpg', alt: 'Dinesh and Divya standing together', caption: 'A beautiful beginning' },
      { src: '/images/dinesh-divya-couple.jpg', alt: 'Dinesh and Divya holding hands', caption: 'Hand in hand' },
      { src: '/images/dinesh-divya-family-1.jpg', alt: 'Dinesh and Divya with family', caption: 'Blessed by family' },
      { src: '/images/dinesh-divya-family-2.jpg', alt: 'Dinesh and Divya with loved ones', caption: 'Surrounded by love' },
      { src: '/images/dinesh-divya-porat.JPG', alt: 'Dinesh and Divya', caption: 'Together in joy' },
      { src: '/images/IMG_1597.JPG', alt: 'Dinesh and Divya',caption: 'A special moment' },
    ],
  },

  party: {
    eyebrow: 'By our side',
    title: 'Family & Friends',
    intro: 'Thank you to everyone who has supported and prayed for Dinesh and Divya.',
    officiant: { name: 'To be announced', role: 'Officiant', relation: 'Wedding ceremony' },
    bridesmaids: [],
    groomsmen: [],
  },

  travel: {
    eyebrow: 'Getting here',
    title: 'Travel',
    intro: 'The wedding celebration will take place in Tenali, Andhra Pradesh.',
    hotels: [],
    notes: [
      { title: 'Venue', description: venueAddress },
      { title: 'Date', description: 'Friday, 4 September 2026' },
      { title: 'Wedding', description: '10:00 AM' },
      { title: 'Reception & Lunch', description: '12:30 PM onwards' },
    ],
  },

  rsvp: {
    eyebrow: 'Join us',
    title: 'Your Presence',
    message: 'Your presence, prayers, and blessings are the greatest gift to Dinesh and Divya.',
    deadline: 'We look forward to celebrating this special day with you.',
    phones: [],
  },

  footer: {
    message: 'Made with love, and with gratitude to God.',
    verse: '“The Lord has made everything beautiful in His time.” — Ecclesiastes 3:11',
  },
};
