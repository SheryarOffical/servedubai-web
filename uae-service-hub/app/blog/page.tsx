import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, type BlogPost } from '@/lib/data/blog'
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cleaning Tips & Guides Dubai | Sofa, Carpet, Villa Cleaning Costs & FAQ',
    description:
      'Expert cleaning guides for Dubai — how much does sofa cleaning cost in Dubai, villa deep cleaning vs regular cleaning, marble polishing vs crystallization, move-out cleaning checklists & more. Practical advice from Madinat Alhaya.',
    path: '/blog',
  }),
  keywords: [
    'sofa cleaning cost Dubai', 'villa deep cleaning cost Dubai', 'carpet cleaning price Dubai',
    'marble polishing cost Dubai', 'how often deep clean Dubai', 'move out cleaning checklist Dubai',
    'difference marble polishing crystallization', 'how to remove sand villa Dubai',
    'upholstery cleaning tips UAE', 'cleaning guides Dubai', 'mattress cleaning how often UAE',
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
])

function categoryOf(p: BlogPost): string {
  const t = p.title.toLowerCase()
  if (t.includes('cost') || t.includes('price')) return 'Pricing Guide'
  if (t.includes('how often')) return 'Care Tips'
  if (t.includes('checklist')) return 'Checklist'
  return 'Guide'
}

const ArrowReadMore = ({ label = 'Read article' }: { label?: string }) => (
  <span className="blog-readmore">
    {label}
    <span className="arw">→</span>
  </span>
)

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="blog-wrap city-main">
        {/* ambient floating accents */}
        <div className="blog-blob b1" />
        <div className="blog-blob b2" />

        <div className="blog-inner max-w-6xl mx-auto px-4 py-12" style={{ paddingTop: '120px' }}>
          <nav className="text-sm mb-8" aria-label="Breadcrumb" style={{ color: '#9ca3af' }}>
            <a href="/" style={{ color: '#c9a84c' }}>Home</a>
            <span className="mx-2" style={{ color: '#4b5563' }}>/</span>
            <span className="text-white city-crumb-cur">Blog</span>
          </nav>

          <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Cleaning Tips &amp; Guides
          </div>
          <h1 className="city-page-h1" style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.9rem, 4.2vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12 }}>
            The Madinat Alhaya Cleaning Blog
          </h1>
          <div className="blog-title-accent" />
          <p className="city-page-sub" style={{ color: '#9ca3af', fontSize: '1.075rem', lineHeight: 1.7, margin: '1rem 0 2.75rem', maxWidth: '720px' }}>
            Practical, Dubai-specific cleaning advice — real prices, care schedules, and checklists to help you keep your home spotless and make smart booking decisions.
          </p>

          {/* ── FEATURED POST ── */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="blog-featured">
              <div className="blog-featured-img">
                <Image src={featured.image} alt={featured.h1} fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 640px" />
                <span className="blog-cat">Featured · {categoryOf(featured)}</span>
              </div>
              <div className="blog-featured-body">
                <div style={{ color: '#9aa3b2', fontSize: '0.8rem', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{featured.readMins} min read</div>
                <h2 className="blog-card-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.8rem' }}>{featured.h1}</h2>
                <p className="blog-card-excerpt" style={{ fontSize: '1.02rem', flex: 'unset' }}>{featured.excerpt}</p>
                <ArrowReadMore label="Read the guide" />
              </div>
            </Link>
          )}

          {/* ── GRID ── */}
          <div className="blog-grid">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-img">
                  <Image src={post.image} alt={post.h1} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, 360px" loading="lazy" />
                  <span className="blog-cat">{categoryOf(post)}</span>
                  <span className="blog-readpill">{post.readMins} min</span>
                </div>
                <div className="blog-card-body">
                  <h2 className="blog-card-title">{post.h1}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <ArrowReadMore />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
