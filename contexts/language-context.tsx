"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState("pt")

  // Carregar idioma do localStorage na inicialização
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language")
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Salvar idioma no localStorage quando mudar
  const setLanguage = (newLanguage: string) => {
    setLanguageState(newLanguage)
    localStorage.setItem("preferred-language", newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
