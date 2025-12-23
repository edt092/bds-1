'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language, TranslationKey } from './translations'

interface LanguageContextType {
  lang: Language
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es')

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase()

    // Check if browser language starts with 'en'
    if (browserLang.startsWith('en')) {
      setLang('en')
    } else {
      setLang('es') // Default to Spanish for all other languages
    }
  }, [])

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || translations['es'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
