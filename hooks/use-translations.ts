"use client"

import { useState, useEffect } from "react"

type Translations = Record<string, string>

export function useTranslations(language: string) {
  const [translations, setTranslations] = useState<Translations>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/languages/${language}.json`)
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading translations:", error)
        setLoading(false)
      })
  }, [language])

  return { translations, loading }
}
