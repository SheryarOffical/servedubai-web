import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/data/blog'
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cleaning Tips & Guides for Dubai | Al Haya Blog',
  description:
    'Expert cleaning guides for Dubai — sofa & villa cleaning costs, how often to deep-clean, move-out checklists and more. Practical advice from Al Haya Cleaning Services.',
  path: '/blog',
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
])

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="city-main max-w-5xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
        <nav className="text-sm mb-8" aria-label="Breadcrumb" style={{ color: '#9ca3af' }}>
          <a href="/" style={{ color: '#c9a84c' }}>Home</a>
          <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
          <span className="text-white city-crumb-cur">Blog</span>
        </nav>

        <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Cleaning Tips &amp; Guides
        </div>
        <h1 className="city-page-h1" style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '1rem' }}>
          The Al Haya Cleaning Blog
        </h1>
        <p className="city-page-sub" style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '700px' }}>
          Practical, Dubai-specific cleaning advice — real prices, care schedules, and checklists to help you keep your home spotless and make smart booking decisions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="home-svc-card"
              style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none' }}
            >
              <div style={{ position: 'relative', height: '180px', flexShrink: 0 }}>
                <Image src={post.image} alt={post.h1} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, 360px" loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.55))' }} />
              </div>
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#9aa3b2', fontSize: '0.78rem', marginBottom: '0.5rem' }}>{post.readMins} min read</div>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '0.5rem' }}>{post.h1}</h2>
                <p style={{ color: '#c3cad6', fontSize: '0.95rem', lineHeight: 1.6, flex: 1, margin: 0 }}>{post.excerpt}</p>
                <span style={{ color: '#d9b85c', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.85rem' }}>Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
