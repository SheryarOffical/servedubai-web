'use client'

import { useLocale } from '@/lib/i18n/LanguageProvider'

export default function LanguageToggle() {
  const { locale, toggle } = useLocale()

  return (
    <button
      onClick={toggle}
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      className="lang-toggle-btn"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  )
}
