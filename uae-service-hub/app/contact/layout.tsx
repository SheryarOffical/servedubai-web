import type { Metadata } from 'next'
import { buildLocalBusinessSchema, buildMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us | Book Professional Cleaning in UAE',
  description:
    'Contact Al Haya Cleaning Services to book professional cleaning across UAE. Same-day service. Call or WhatsApp +971 55 127 5545 for a free instant quote.',
  path: '/contact',
})

const contactSchema = buildLocalBusinessSchema({ path: '/contact' })

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      {children}
    </>
  )
}
