import { useState, useEffect } from "react"

interface CardData {
  id: number
  title: string
  content: string
  lawLinkText?: string
  websiteLinkText?: string
  galleryTitle?: string
}

interface CardTranslationsData {
  cards: CardData[]
}

export function useCardTranslations(language: string) {
  const [cards, setCards] = useState<CardData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCards = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/languages/cards-${language}.json`)
        if (response.ok) {
          const data: CardTranslationsData = await response.json()
          setCards(data.cards)
        } else {
          // Fallback to Portuguese if language file doesn't exist
          const fallbackResponse = await fetch("/languages/cards-pt.json")
          const fallbackData: CardTranslationsData = await fallbackResponse.json()
          setCards(fallbackData.cards)
        }
      } catch (error) {
        console.error("Error loading card translations:", error)
        setCards([])
      } finally {
        setLoading(false)
      }
    }

    loadCards()
  }, [language])

  return { cards, loading }
}
