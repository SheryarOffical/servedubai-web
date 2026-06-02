export const SITE_CONFIG = {
  siteName: 'Al Haya Cleaning Services',
  brandShort: 'Al Haya',
  titleSuffix: ' | Al Haya',
  phone: '+971551275545',
  phoneDisplay: '+971 55 127 5545',
  whatsapp: '+971551275545',
  whatsappDisplay: 'Call or WhatsApp: +971 55 127 5545',
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim(),
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+971551275545').trim(),
  // Google Business Profile — used for the "Review us on Google" CTAs.
  googleProfileLink: 'https://share.google/bDF6NqN3sJvO2nxSr',
  // TODO (Phase 3): replace with the DIRECT review link from GBP → "Ask for reviews"
  // (looks like https://g.page/r/XXXXXXXXXXXX/review — opens the review box straight away).
  // Until then this opens the listing, where customers tap "Write a review".
  googleReviewLink: 'https://share.google/bDF6NqN3sJvO2nxSr',
} as const
