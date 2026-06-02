import Link from 'next/link'
import { SERVICE_AREA_COMBOS } from '@/lib/data/serviceAreaCombos'
import { getServiceBySlug } from '@/lib/data/services'
import { getCityBySlug } from '@/lib/data/emirates'

/**
 * "Popular Services by Area" — internal-linking hub block.
 * Groups the service×area combo pages by service and renders gold pill links.
 * Theme-safe by design: gold text + gold borders + transparent background, so it
 * reads correctly on both the Dark and Light Gold themes without extra CSS.
 *
 * Used on the homepage and on the /areas index page.
 */
export default function PopularAreas() {
  // Group combos by service slug, preserving definition order.
  const order: string[] = []
  const groups: Record<string, { emirate: string; city: string }[]> = {}
  for (const c of SERVICE_AREA_COMBOS) {
    if (!groups[c.service]) {
      groups[c.service] = []
      order.push(c.service)
    }
    groups[c.service].push({ emirate: c.emirate, city: c.city })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {order.map((slug) => {
        const service = getServiceBySlug(slug)
        if (!service) return null
        const shortName = service.name.split(/[&]/)[0].trim()
        return (
          <div
            key={slug}
            style={{
              border: '1px solid rgba(201,168,76,0.22)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#c9a84c',
                marginBottom: '0.85rem',
                letterSpacing: '0.02em',
              }}
            >
              {shortName} in Dubai
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {groups[slug].map(({ emirate, city }) => {
                const c = getCityBySlug(emirate, city)
                if (!c) return null
                return (
                  <Link
                    key={`${emirate}-${city}`}
                    href={`/${emirate}/${city}/${slug}`}
                    style={{
                      padding: '0.4rem 1rem',
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      color: '#c9a84c',
                      borderRadius: '500px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.65rem' }}>→</span>
                    {shortName} in {c.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
