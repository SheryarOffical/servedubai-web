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
  googleProfileLink: 'https://maps.app.goo.gl/qAog9d6usteD2jsH6',
  // Direct GBP review link — opens the Google review box straight away.
  googleReviewLink: 'https://g.page/r/Cb1IPdAbIVZfEBM/review',
} as const
