'use client'

import { useSyncExternalStore, useEffect } from 'react'
import type { Locale } from './translations'

let listeners: Array<() => void> = []
let currentLocale: Locale = 'en'

function getLocale(): Locale {
  return currentLocale
}

function getServerLocale(): Locale {
  return 'en'
}

function subscribe(cb: () => void) {
  listeners.push(cb)
  return () => {
    listeners = listeners.filter((l) => l !== cb)
  }
}

function setLocale(next: Locale) {
  currentLocale = next
  if (typeof window !== 'undefined') {
    localStorage.setItem('site-lang', next)
    document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', next === 'ar' ? 'ar' : 'en-AE')
  }
  listeners.forEach((cb) => cb())
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribe, getLocale, getServerLocale)

  useEffect(() => {
    const saved = localStorage.getItem('site-lang') as Locale | null
    if (saved === 'ar' || saved === 'en') {
      if (saved !== currentLocale) setLocale(saved)
    }
  }, [])

  const toggle = () => setLocale(currentLocale === 'en' ? 'ar' : 'en')
  return { locale, toggle }
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
