'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

const translations = {
  en: {
    timelines: 'Timelines',
    studio: 'Studio',
    shelzy: 'Shelzy',
    guides: 'Guides',
    releaseMusic: 'Release Music',
    release3DAssets: '3D Assets',
    languageSwitch: 'Switch Language',
    english: 'English',
    spanish: 'Spanish',
  },
  es: {
    timelines: 'Líneas de tiempo',
    studio: 'Estudio',
    shelzy: 'Shelzy',
    guides: 'Guías',
    releaseMusic: 'Lanzar Música',
    release3DAssets: 'Activos 3D',
    languageSwitch: 'Cambiar Idioma',
    english: 'Inglés',
    spanish: 'Español',
  },
}

type TranslationKey = keyof typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: TranslationKey) => translations[language][key]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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