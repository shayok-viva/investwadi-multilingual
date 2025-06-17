"use client"

import { translations } from "@/data/translation"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with Arabic to match the HTML layout
  const [language, setLanguage] = useState<Language>("ar")
  const isRTL = language === "ar"

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["ar"]] || key
  }

  // Only update document direction on the client side after mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = isRTL ? "rtl" : "ltr"
      document.documentElement.lang = language
    }
  }, [language, isRTL])

  return <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
