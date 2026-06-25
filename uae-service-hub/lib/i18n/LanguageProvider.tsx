'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Locale } from './translations'

const LangCtx = createContext<{ locale: Locale; toggle: () => void }>({
  locale: 'en',
  toggle: () => {},
})

export function useLocale() {
  return useContext(LangCtx)
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('site-lang') as Locale | null
    if (saved === 'ar' || saved === 'en') {
      setLocale(saved)
      applyDir(saved)
    }
  }, [])

  const applyDir = (l: Locale) => {
    document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', l === 'ar' ? 'ar' : 'en-AE')
  }

  const toggle = () => {
    setLocale(prev => {
      const next: Locale = prev === 'en' ? 'ar' : 'en'
      localStorage.setItem('site-lang', next)
      applyDir(next)
      return next
    })
  }

  return <LangCtx.Provider value={{ locale, toggle }}>{children}</LangCtx.Provider>
}
