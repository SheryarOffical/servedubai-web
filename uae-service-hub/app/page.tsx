import type { Metadata } from 'next'
import { buildMetadata, buildLocalBusinessSchema, buildImageObjectSchema } from '@/lib/utils/seo'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = buildMetadata({
  title: 'Professional Cleaning Services Dubai | Top-Rated Villa & Sofa Cleaning',
  description:
    'Looking for the best professional cleaning services in Dubai? We offer expert villa & apartment cleaning, deep sofa & mattress cleaning, carpet care, and premium marble polishing. 100% Satisfaction Guaranteed. Book your deep clean today!',
  path: '/',
})

const heroSlides = [
  { image: '/images/hero/professional-cleaning-services-UAE.webp', imageAlt: 'Professional Cleaning Services Dubai — Madinat Alhaya certified cleaning technicians UAE', imageTitle: 'Professional Cleaning Services Dubai | Madinat Alhaya', tags: ['professional cleaning services Dubai', 'cleaning services Dubai', 'deep cleaning Dubai', 'Madinat Alhaya cleaning UAE', 'same day cleaning service Dubai'] },
  { image: '/images/hero/sofa-carpet-cleaning.webp', imageAlt: 'Sofa Carpet Cleaning Dubai — professional upholstery and carpet deep cleaning UAE', imageTitle: 'Sofa Cleaning Dubai | Carpet Cleaning Dubai by Madinat Alhaya', tags: ['sofa cleaning Dubai', 'carpet cleaning Dubai', 'upholstery cleaning UAE', 'leather sofa cleaning Dubai', 'rug cleaning services UAE'] },
  { image: '/images/hero/marble-polishing-dubai.webp', imageAlt: 'Marble Polishing Dubai — professional floor polishing and marble restoration UAE', imageTitle: 'Marble Polishing Dubai | Stone Restoration by Madinat Alhaya', tags: ['marble polishing Dubai', 'floor polishing services Dubai', 'marble restoration UAE', 'stone polishing UAE'] },
]

const schema = buildLocalBusinessSchema({ path: '/' })
const imageSchema = buildImageObjectSchema(
  heroSlides.map((s) => ({ url: s.image, name: s.imageTitle, description: s.imageAlt, tags: s.tags }))
)

const faqs = [
  { q: 'What is included in a villa deep cleaning service in Dubai?', a: "Our villa cleaning goes beyond standard dusting. It includes deep sanitization of all bathrooms and kitchens, cleaning of AC vents, internal window tracks, floor scrubbing, and detailed cleaning of baseboards and light switches to remove Dubai's fine desert dust." },
  { q: 'How often should I get my sofa and mattress professionally cleaned?', a: "Due to Dubai's high humidity and dust levels, we recommend professional sofa and mattress cleaning every 6 months. This helps eliminate dust mites, allergens, and sweat accumulation that can affect indoor air quality and sleep health." },
  { q: 'Is your marble polishing process dust-free?', a: 'Yes, we use a wet polishing method and advanced Italian machinery that ensures a dust-free environment. Whether you choose standard polishing or re-crystallization, your home remains clean throughout the restoration process.' },
  { q: 'How long does it take for carpets to dry after a professional clean?', a: 'Using our industrial-grade steam extraction or dry shampooing methods, most carpets are dry and ready to walk on within 3 to 6 hours, depending on the material and ventilation in the room.' },
  { q: 'Are the cleaning chemicals safe for children and pets?', a: 'Absolutely. We prioritize eco-friendly, non-toxic, and biodegradable cleaning solutions that are powerful against stains but completely safe for your family and pets.' },
  { q: 'How much does professional sofa cleaning cost in Dubai?', a: 'Prices typically range from AED 250 for a small sofa to AED 450+ for larger sectionals, depending on the material (fabric vs. leather) and cleaning method used.' },
  { q: 'What is the difference between marble polishing and crystallization?', a: "Standard polishing removes scratches and stains to restore the stone's surface, while crystallization is a chemical process that adds a high-gloss, protective mirror finish to the marble." },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeContent />
    </>
  )
}
